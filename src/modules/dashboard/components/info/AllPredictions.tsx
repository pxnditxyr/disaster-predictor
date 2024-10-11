import type { IPrediction } from "@/interfaces"
import { getPredictions } from "@/utils"
import { useEffect, useState } from "react"

export const AllPredictions = () => {

  const [ predictions, setPredictions ] = useState<IPrediction[] | null>(null)
  const [ date, setDate ] = useState<string>( new Date().toISOString().split( 'T' )[ 0 ] )

  useEffect( () => {
    const fetchPredictions = async () => {
      const data = await getPredictions( date )
      if ( data ) {
        setPredictions( data.predictions )
      }
    }
    fetchPredictions()
  }, [ date ] )

  const getRowStyles = ( dangerIndicator : string ) => {
    switch ( dangerIndicator ) {
      case "nivel bajo":
        return {
          base: "border-[#E6F2F2] hover:bg-[#F0F8F8]",
          text: "text-[#3A5F5F]"
        }
      case "nivel moderado":
        return {
          base: "border-[#FFE0B2] bg-[#FFF3E0] hover:bg-[#FFE0B2]",
          text: "text-[#E65100]"
        }
      case "nivel alto":
        return {
          base: "border-[#FFCCCB] bg-[#FFE5E5] hover:bg-[#FFD1D1]",
          text: "text-[#8B0000]"
        }
      default:
        return {
          base: "border-[#E6F2F2] hover:bg-[#F0F8F8]",
          text: "text-[#3A5F5F]"
        }
    }
  }

  return (
    <article className="w-full flex flex-col justify-center items-center gap-8">
      <section>
        <h2 className="text-xl font-semibold"> Quieres visitar nuestras predicciones anteriores? Elige una fecha. </h2>
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
              <th className="text-teal-700 text-left font-semibold py-4 px-4">Región</th>
              <th className="text-teal-700 text-left font-semibold py-4 px-4">Predicción</th>
              <th className="text-teal-700 text-left font-semibold py-4 px-4 last:rounded-tr-lg">Indicador de Peligro</th>
            </tr>
          </thead>
          <tbody>
            {
              ( predictions === null ) ? (
                <tr>
                  <td colSpan={ 4 }>
                    <div className="flex justify-center items-center">
                      Por favor, espera un momento...
                    </div>
                  </td>
                </tr>
              ) : (
                  predictions.map( ( prediction ) => {
                    const styles = getRowStyles( prediction.dangerIndicator )
                    return (
                      <tr
                        key={ prediction.id }
                        className={ `border-b transition-colors ${ styles.base }` }
                      >
                        <td className={ `py-3 px-4 ${ styles.text }` }>{ prediction.date }</td>
                        <td className={ `py-3 px-4 ${ styles.text }` }>{ prediction.region }</td>
                        <td className={ `py-3 px-4 ${ styles.text }` }>{ prediction.prediction }</td>
                        <td className={ `py-3 px-4 ${ styles.text }` }>{ prediction.dangerIndicator }</td>
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
