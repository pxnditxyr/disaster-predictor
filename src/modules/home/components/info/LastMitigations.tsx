import type { IDisaster, IMitigationAction, IMitigationPlan, IPrediction } from "@/interfaces"
import { generateMitigationPlan, getPredictions, getRiskLevelName, getRowStyles } from "@/utils"
import { useEffect, useState } from "react"

interface Props {
  mitigationActions: IMitigationAction[]
  disasterTypes: IDisaster[]
}

export const LastMitigations = ( { mitigationActions, disasterTypes }: Props ) => {

  const [ mitigationPlan, setMitigationPlan ] = useState<IMitigationPlan[] | null>( null )
  const [ predictions, setPredictions ] = useState<IPrediction[] | null>( null )

  useEffect( () => {
    const fetchPredictions = async () => {
      const data = await getPredictions( new Date().toISOString().split( 'T' )[ 0 ] )
      if ( data ) {
        setMitigationPlan( generateMitigationPlan( mitigationActions, disasterTypes, data.fullDataPredictions ) )
      }
    }
    fetchPredictions()
  }, [] )


  useEffect( () => {
    const fetchPredictions = async () => {
      const currentDate = new Date().toISOString().split( 'T' )[ 0 ]
      const data = await getPredictions( currentDate )
      if ( data ) {
        setPredictions( data.predictions )
      }
    }
    fetchPredictions()
  }, [] )

  return (
    <article className="w-full flex flex-col justify-center items-center gap-8">
      <section>
        <h2 className="text-2xl font-bold"> Últimas Acciones de Mitigación </h2>
      </section>

        <section className="w-full overflow-x-auto max-w-[850px]">
          <table className="w-full">
            <thead>
              <tr className="bg-[#B8d8d8]">
                <th className="text-teal-700 text-left font-semibold py-4 px-4 first:rounded-tl-lg"> Fecha </th>
                <th className="text-teal-700 text-left font-semibold py-4 px-4"> Región </th>
                <th className="text-teal-700 text-left font-semibold py-4 px-4"> Evento Detectado </th>
                <th className="text-teal-700 text-left font-semibold py-4 px-4"> Acción de Mitigación </th>
                <th className="text-teal-700 text-left font-semibold py-4 px-4 last:rounded-tr-lg"> Indicador de Peligro </th>
              </tr>
            </thead>
            <tbody className="capitalize">
              {
                mitigationPlan?.map( ( mitigation, index ) => {
                  const styles = getRowStyles( mitigation.dangerIndicator )
                  return (
                    <tr
                      key={ mitigation.date }
                      className={ `border-b transition-colors ${ styles.base }` }
                    >
                      <td className={ `py-3 px-4 ${ styles.text }` }>{ mitigation.date }</td>
                      <td className={ `py-3 px-4 ${ styles.text }` }>{ mitigation.address }</td>

                      <td className={ `py-3 px-4 ${ styles.text }` }>
                        { predictions?.[ index ].prediction }
                      </td>

                      <td className={ `py-3 px-4 ${ styles.text }` }>
                        {
                          ( mitigation.mitigationAction ) ? (
                            <a href={ `/mitigations/${ mitigation.mitigationAction.id }` } className="text-blue-500" target="_blank" rel="noreferrer">
                              { mitigation.mitigationAction.description }
                            </a>
                          ) : (
                            <span className="text-gray-500"> Ninguna acción de mitigación </span>
                          )
                        }
                      </td>
                      <td className={ `py-3 px-4 ${ styles.text }` }>{ getRiskLevelName( mitigation.dangerIndicator ) }</td>
                    </tr>
                  )
                } )
              }
            </tbody>
          </table>

        </section>

      </article>
  )
}
