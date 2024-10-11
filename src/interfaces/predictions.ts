export interface IPrediction {
  id: string
  date: string
  region: string
  prediction: string
  dangerIndicator: string
}

export interface IApiPredictionResponse {
  address: string
  "crisis del agua (sequia)": number
  date: string
  derrumbe: number
  "desborde de rio": number
  deslizamiento: number
  granizada: number
  "granizada e inundacion": number
  inundacion: number
  riada: number
}

export interface IFormattedApiPredictionResponse {
  date: string
  address: string
  disasterType: {
    name: string
    probability: number
  }
}
