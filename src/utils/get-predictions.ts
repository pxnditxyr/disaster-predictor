import type { IApiPredictionResponse, IPrediction } from "@/interfaces"

export const getPredictions = async ( date : string ): Promise<{ predictions: IPrediction[], fullDataPredictions: IApiPredictionResponse[] } | null> => {
  const adjustedDate = new Date(date)
  adjustedDate.setDate(adjustedDate.getDate() - 1)
  const formattedDate = adjustedDate.toISOString().split('T')[0]

  try {
    const response = await fetch( 'http://localhost:5000/api/get-predictions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify([
        {
          "visibility_avg": 10.5,
          "wind_min": 3.2,
          "wind_max": 15.6,
          "wind_avg": 7.4,
          "pressure_min": 1012,
          "pressure_max": 1020,
          "pressure_avg": 1016,
          "temp_min": 15.0,
          "temp_max": 25.0,
          "temp_avg": 20.0,
          "date": formattedDate,
        }
      ])
    } )
    const data = await response.json()

    if ( !data || !data.predictions ) {
      return null
    }

    const formattedPredictions: IPrediction[] = data.predictions.map( ( prediction: any ) => {
      const maxPrediction : any = Object.entries( prediction )
        .filter( ([ key ]) => ![ 'address', 'date' ].includes( key ) )
        .reduce( ( max : any, current : any ) => ( current[ 1 ] > max[ 1 ] ? current : max ) )

      let dangerIndicator = 'nivel bajo'
      if ( maxPrediction[ 1 ] > 0.65 ) {
        dangerIndicator = 'nivel alto'
      } else if ( maxPrediction[1] > 0.55 ) {
        dangerIndicator = 'nivel moderado'
      }
      if ( prediction.address === 'no hay direccion' ) {
        dangerIndicator = 'nivel bajo'
      }

      return {
        id: prediction.date,
        date: prediction.date,
        region: prediction.address === 'no hay direccion' ? 'Ninguna' : prediction.address,
        prediction: prediction.address === 'no hay direccion' ? 'Ninguna' : maxPrediction[0],
        dangerIndicator: dangerIndicator,
        probablity: maxPrediction[ 1 ]
      }
    } )

    return {
      predictions: formattedPredictions ,
      fullDataPredictions: data.predictions
    }
  } catch ( error ) {
    console.error( 'Error:', error )
    return null
  }
}
