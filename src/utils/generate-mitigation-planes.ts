import type { IMitigationAction, IApiPredictionResponse, IDisaster } from '@/interfaces';

interface IPrediction {
  disasterType: string;
  probability: number;
}

interface ITransformedApiResponse {
  address: string;
  date: string;
  predictions: IPrediction[];
}

interface IHighestProbabilityResponse {
  address: string;
  date: string;
  disasterType: string;
  probability: number;
}

export interface IMitigationPlanes {
  date: string;
  address: string;
  mitigationAction: IMitigationAction[] | null;
  dangerIndicator: number;
}

const transformApiResponse = (apiResponse: IApiPredictionResponse): ITransformedApiResponse => {
  const { address, date, ...disasterProbabilities } = apiResponse;

  const predictions: IPrediction[] = Object.entries(disasterProbabilities).map(
    ([disasterType, probability]) => ({
      disasterType,
      probability,
    })
  );

  return {
    address,
    date,
    predictions,
  };
};

const filterPredictionsByProbability = (
  predictions: ITransformedApiResponse[],
  threshold: number
): ITransformedApiResponse[] => {
  return predictions.filter((apiResponse) => {
    return apiResponse.predictions.some((prediction) => prediction.probability >= threshold);
  });
};

const discardPredictionsWithoutAddress = (
  predictions: ITransformedApiResponse[]
): ITransformedApiResponse[] => {
  return predictions.filter(
    (apiResponse) => apiResponse.address && apiResponse.address.trim() !== 'no hay direccion'
  );
};

const getHighestProbability = (
  predictions: ITransformedApiResponse[]
): IHighestProbabilityResponse[] => {
  return predictions.map<IHighestProbabilityResponse>((prediction) => {
    const highestPrediction = prediction.predictions.reduce((prev, current) => {
      return current.probability > prev.probability ? current : prev;
    });

    return {
      address: prediction.address,
      date: prediction.date,
      disasterType: highestPrediction.disasterType,
      probability: highestPrediction.probability,
    };
  });
};

const mapProbabilityToRiskLevel = (probability: number): number => {
  if (probability >= 0.65) return 3;
  if (probability >= 0.55) return 2;
  return 1;
};

const getDisasterTypeIdByName = (disasterTypes: IDisaster[], name: string): number | null => {
  const disaster = disasterTypes.find(
    (disaster) => disaster.name.toLowerCase() === name.toLowerCase()
  );
  return disaster ? disaster.id : null;
};

export const generateMitigationPlanes = (
  mitigationActions: IMitigationAction[],
  disasterTypes: IDisaster[],
  predictions: IApiPredictionResponse[]
): IMitigationPlanes[] => {
  const threshold = 0.3;
  const transformedApiResponses = predictions.map(transformApiResponse);
  const filteredPredictions = filterPredictionsByProbability(transformedApiResponses, threshold);

  if (filteredPredictions.length === 0) {
    return predictions.map((prediction) => ({
      date: prediction.date,
      address: prediction.address,
      mitigationAction: null,
      dangerIndicator: 1,
    }));
  }

  const filteredPredictionsWithoutAddress = discardPredictionsWithoutAddress(filteredPredictions);

  if (filteredPredictionsWithoutAddress.length === 0) {
    return predictions.map((prediction) => ({
      date: prediction.date,
      address: prediction.address,
      mitigationAction: null,
      dangerIndicator: 1,
    }));
  }

  const highestProbability = getHighestProbability(filteredPredictionsWithoutAddress);

  const mitigationPlan: IMitigationPlan[] = highestProbability.map( ( prediction ) => {
    const riskLevel = mapProbabilityToRiskLevel(prediction.probability);

    const disasterTypeId = getDisasterTypeIdByName(disasterTypes, prediction.disasterType);

    if (disasterTypeId === null) {
      return {
        date: prediction.date,
        address: prediction.address,
        mitigationAction: null,
        dangerIndicator: riskLevel,
      };
    }

    let possibleActions = mitigationActions.filter(
      (action) => action.disasterTypeId === disasterTypeId
    );

    possibleActions = possibleActions.filter((action) => action.riskLevel === riskLevel);

    const actionsMatchingAddress = possibleActions.filter(
      (action) =>
        action.address && action.address.toLowerCase() === prediction.address.toLowerCase()
    );

    if (actionsMatchingAddress.length > 0) {
      possibleActions = actionsMatchingAddress;
    } else {
      const generalActions = possibleActions.filter((action) => !action.address);
      if (generalActions.length > 0) {
        possibleActions = generalActions;
      }
    }

    const actionsWithSafety = possibleActions.filter( ( action ) => action.safetyLevel !== undefined )
    if ( actionsWithSafety.length > 0 ) {
      possibleActions = actionsWithSafety.sort( ( a, b ) => ( b.safetyLevel ?? 0 ) - ( a.safetyLevel ?? 0 ) );
    }

    // Instead of selecting a single action, return all possible actions
    const selectedActions = possibleActions.length > 0 ? possibleActions : null;

    // Determine the danger indicator based on the risk level
    const dangerIndicator = riskLevel;

    return {
      date: prediction.date,
      address: prediction.address,
      mitigationAction: selectedActions,
      dangerIndicator,
    };
  } );

  const baseMitigationPlan = predictions.map((prediction) => ({
    date: prediction.date,
    address: prediction.address,
    mitigationAction: null,
    dangerIndicator: 1,
  }));

  return baseMitigationPlan.map((baseMitigation) => {
    const currentData = mitigationPlan.find((plan) => plan.date === baseMitigation.date);

    if (!currentData) return baseMitigation;

    const result = {
      ...baseMitigation,
      mitigationAction: currentData.mitigationAction,
      dangerIndicator: currentData.dangerIndicator,
    }

    return result
  });
};
