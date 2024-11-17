import { extract } from '@extractus/article-extractor'

export interface IWeather {
  min: number
  max: number
  avg: number
}


export const getWeatherFromHtml = ( figureChart : string ) : IWeather => {
  const temperatureTexts = figureChart.match( /\d+,\d+ °C/g ) ?? []

  const temperatures = temperatureTexts.map(
    ( temperature ) => parseFloat(
      temperature.replace( /,/, '.' )
        .replace( / °C/, '' )
    )
  )

  const uniqueTemperatures = [ ...new Set( temperatures ) ]

  const sortedTemperatures = uniqueTemperatures.sort( ( a, b ) => a - b )

  const min = sortedTemperatures.at( 0 )
  const max = sortedTemperatures.at( -1 )

  const avg = sortedTemperatures.reduce( ( acc, temperature ) => acc + temperature, 0 ) / sortedTemperatures.length

  return {
    min: min ?? -273,
    max: max ?? -273,
    avg: avg ?? -273,
  }
}

export const getPageData = async ( url : string ) => {
  const article = await extract( url )

  setTimeout( async () => {
    console.log( 'Getting weather data...' )
  }, 500 )
  return article
}
