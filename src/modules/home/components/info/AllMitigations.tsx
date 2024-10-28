import type { IDisaster, IMitigationAction, IMitigationPlan, IPrediction } from "@/interfaces"
import { generateMitigationPlan, generateMitigationPlanes, getPredictions, getRiskLevelName, getRowStyles, type IMitigationPlanes } from "@/utils"
import { useEffect, useState } from "react"

interface Props {
  mitigationActions: IMitigationAction[]
  disasterTypes: IDisaster[]
}

export const AllMitigations = ( { mitigationActions, disasterTypes }: Props ) => {

  const [ mitigationPlan, setMitigationPlan ] = useState<IMitigationPlanes[] | null>( null )
  const [ date, setDate ] = useState<string>( new Date().toISOString().split( 'T' )[ 0 ] )

  const [ predictions, setPredictions ] = useState<IPrediction[] | null>( null )

  useEffect( () => {
    const fetchPredictions = async () => {
      const data = await getPredictions( date )
      if ( data ) {
        setPredictions( data.predictions )
      }
    }
    fetchPredictions()
  }, [ date ] )

  useEffect( () => {
    const fetchPredictions = async () => {
      const data = await getPredictions( date )
      if ( data ) {
        setMitigationPlan( generateMitigationPlanes( mitigationActions, disasterTypes, data.fullDataPredictions ) )
      }
    }
    fetchPredictions()
  }, [ date ] )

  return (
    <article className="w-full flex flex-col justify-center items-center gap-8">
      <section>
        <h2 className="text-2xl font-bold"> Historial de Acciones de Mitigación </h2>
      </section>

      <section className="w-full flex flex-col justify-center items-center">
        <input
          type="date"
          value={ date }
          onChange={ ( e ) => setDate( e.target.value ) }
          className="bg-[#f5ff84] border-[#48D1CC] rounded-xl text-lg font-semibold px-4 py-3 focus:outline-[#20B2AA]"
          max={ new Date().toISOString().split( 'T' )[ 0 ] }
        />
      </section>

      <section className="w-full overflow-x-auto max-w-[950px] max-h-[600px]">
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
              mitigationPlan?.map( ( mitigation ) => {
                const styles = getRowStyles( mitigation.dangerIndicator )
                return (
                  <tr
                    key={ mitigation.date }
                    className={ `border-b transition-colors ${ styles.base }` }
                  >
                    <td className={ `py-3 px-4 ${ styles.text }` }>{ mitigation.date }</td>
                    <td className={ `py-3 px-4 ${ styles.text }` }>{ mitigation.address }</td>
                    <td className={ `py-3 px-4 ${ styles.text }` }>{ predictions?.find( prediction => prediction.date === mitigation.date )?.prediction }</td>
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
          </tbody>
        </table>

      </section>

    </article>
  )
}
