import type { IDisaster, IMitigationAction, IMitigationPlan, IPrediction } from "@/interfaces"
import { generateMitigationPlan, getPredictions, getRiskLevelName, getRowStyles } from "@/utils"
import { useEffect, useState } from "react"

interface Props {
  mitigationActions: IMitigationAction[]
  disasterTypes: IDisaster[]
}

export const AllMitigations = ( { mitigationActions, disasterTypes }: Props ) => {

  const [ mitigationPlan, setMitigationPlan ] = useState<IMitigationPlan[] | null>( null )
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
        setMitigationPlan( generateMitigationPlan( mitigationActions, disasterTypes, data.fullDataPredictions ) )
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
