import type { IDisaster, IMitigationAction, IMitigationPlan, IPrediction } from "@/interfaces"
import { generateMitigationPlanes, getPredictions, getRiskLevelName, getRowStyles, type IMitigationPlanes } from "@/utils"
import { useEffect, useState } from "react"

interface Props {
  mitigationActions: IMitigationAction[]
  disasterTypes: IDisaster[]
}

export const LastMitigations = ( { mitigationActions, disasterTypes }: Props ) => {

  const [ mitigationPlan, setMitigationPlan ] = useState<IMitigationPlanes[] | null>( null )
  const [ predictions, setPredictions ] = useState<IPrediction[] | null>( null )

  useEffect( () => {
    const fetchPredictions = async () => {
      const data = await getPredictions( new Date().toISOString().split( 'T' )[ 0 ] )
      if ( data ) {
        setMitigationPlan( generateMitigationPlanes( mitigationActions, disasterTypes, data.fullDataPredictions ) )
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
                      <div className="flex flex-col gap-2 w-full justify-start items-start">
                        {

                          ( mitigation.mitigationAction !== null && mitigation.mitigationAction.length > 0 ) ? (
                            mitigation.mitigationAction.map((action, index) => (
                              <a key={ index } href={ `/mitigations/${ action.id }` } className="text-blue-500 mr-2" target="_blank" rel="noreferrer">
                                { action.description }
                              </a>
                            ))
                          ) : (
                              <span className="text-gray-500"> Ninguna acción de mitigación </span>
                            )
                        }
                      </div>
                    </td>
                    <td className={ `py-3 px-4 ${ styles.text }` }>{ getRiskLevelName( mitigation.dangerIndicator ) }</td>
                  </tr>
                )
              } )
            }
            {
              ( mitigationPlan === null || mitigationPlan.length === 0 ) && (
                <tr>
                  <td colSpan={ 5 } className="text-center py-4 font-semibold text-yellow-900 bg-yellow-200 rounded-b-lg"> No hay datos disponibles </td>
                </tr>
              )
            }
          </tbody>
        </table>

      </section>

    </article>
  )
}
