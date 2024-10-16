import type { IApiPredictionResponse } from "@/interfaces"
import { getPredictions } from "@/utils"
import { useEffect, useState } from "react"

export const LastPredictions = () => {

  const [ predictions, setPredictions ] = useState<IApiPredictionResponse[] | null>(null)

  useEffect( () => {
    const fetchPredictions = async () => {
      const currentDate = new Date().toISOString().split( 'T' )[ 0 ]
      const data = await getPredictions( currentDate )
      if ( data ) {
        setPredictions( data.fullDataPredictions )
      }
    }
    fetchPredictions()
  }, [] )


  const getRowStyles = ( prediction: IApiPredictionResponse ) => {
    const maxRisk = Math.max( ...riskEvents.map( event => prediction[ event ] ) )
    if ( prediction.address === 'no hay direccion' ) {
      return {
        base: "border-[#E6F2F2] hover:bg-[#F0F8F8]",
        text: "text-[#3A5F5F]"
      }
    }
    if ( maxRisk < 0.5 ) {
      return {
        base: "border-[#E6F2F2] hover:bg-[#F0F8F8]",
        text: "text-[#3A5F5F]"
      }
    } else if ( maxRisk < 0.65 ) {
      return {
        base: "border-[#FFE0B2] bg-[#FFF3E0] hover:bg-[#FFE0B2]",
        text: "text-[#E65100]"
      }
    } else {
      return {
        base: "border-[#FFCCCB] bg-[#FFE5E5] hover:bg-[#FFD1D1]",
        text: "text-[#8B0000]"
      }
    }
  }

  const riskEvents = [
    "crisis del agua (sequia)",
    "derrumbe",
    "desborde de rio",
    "deslizamiento",
    "granizada",
    "granizada e inundacion",
    "inundacion",
    "riada"
  ]

  return (
    <article className="w-full flex flex-col justify-center items-center gap-8">
      <section>
        <h2 className="text-2xl font-bold">Últimas Predicciones</h2>
      </section>

      <section className="w-full overflow-x-auto max-w-[850px]">
        <table className="w-full">
          <thead>
            <tr className="bg-[#B8d8d8]">
              <th className="text-teal-700 text-left font-semibold py-4 px-4 first:rounded-tl-lg">
                Fecha
              </th>
              <th className="text-teal-700 text-left font-semibold py-4 px-4">Dirección</th>
              {riskEvents.map(event => (
                <th key={event} className="text-teal-700 text-left font-semibold py-4 px-4">
                  {event}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="capitalize">
            {
              ( predictions === null ) ? (
                <tr>
                  <td colSpan={10} className="bg-orange-200 p-4 rounded-bl-lg rounded-br-lg">
                    <div className="flex justify-center items-center">
                      Por favor, espera un momento...
                    </div>
                  </td>
                </tr>
              ) : (
                  predictions.map( ( prediction ) => {
                    const styles = getRowStyles( prediction )
                    return (
                      <tr
                        key={prediction.date}
                        className={`border-b transition-colors ${styles.base}`}
                      >
                        <td className={`py-3 px-4 ${styles.text}`}>{prediction.date}</td>
                        <td className={`py-3 px-4 ${styles.text}`}>{prediction.address}</td>
                        {riskEvents.map(event => (
                          <td key={event} className={`py-3 px-4 ${styles.text}`}>
                            {(prediction[event] as number * 100).toFixed(2)}%
                          </td>
                        ))}
                      </tr>
                    )
                  } )
                )
            }
          </tbody>
        </table>

      </section>
    </article>
  )
}
