
export const AllPredictions = () => {

  const predictions = [
    {
      id: 1,
      date: '2024-08-25',
      region: 'Ninguna',
      prediction: 'Ningun desastre naturale relacionado con el Fenomeno del Niño',
      dangerIndicator: 'good'
    },
    {
      id: 2,
      date: '2024-08-25',
      region: 'Ninguna',
      prediction: 'Ningun desastre naturale relacionado con el Fenomeno del Niño',
      dangerIndicator: 'warning'
    },
    {
      id: 3,
      date: '2024-08-25',
      region: 'Ninguna',
      prediction: 'Ningun desastre naturale relacionado con el Fenomeno del Niño',
      dangerIndicator: 'danger'
    },
    {
      id: 4,
      date: '2024-08-25',
      region: 'Ninguna',
      prediction: 'Ningun desastre naturale relacionado con el Fenomeno del Niño',
      dangerIndicator: 'good'
    },
    {
      id: 5,
      date: '2024-08-25',
      region: 'Ninguna',
      prediction: 'Ningun desastre naturale relacionado con el Fenomeno del Niño',
      dangerIndicator: 'warning'
    },
    // generate 15 more
    {
      id: 6,
      date: '2024-08-25',
      region: 'Ninguna',
      prediction: 'Ningun desastre naturale relacionado con el Fenomeno del Niño',
      dangerIndicator: 'danger'
    },
    {
      id: 7,
      date: '2024-08-25',
      region: 'Ninguna',
      prediction: 'Ningun desastre naturale relacionado con el Fenomeno del Niño',
      dangerIndicator: 'good'
    },
    {
      id: 8,
      date: '2024-08-25',
      region: 'Ninguna',
      prediction: 'Ningun desastre naturale relacionado con el Fenomeno del Niño',
      dangerIndicator: 'warning'
    },
    {
      id: 9,
      date: '2024-08-25',
      region: 'Ninguna',
      prediction: 'Ningun desastre naturale relacionado con el Fenomeno del Niño',
      dangerIndicator: 'danger'
    },
    {
      id: 10,
      date: '2024-08-25',
      region: 'Ninguna',
      prediction: 'Ningun desastre naturale relacionado con el Fenomeno del Niño',
      dangerIndicator: 'good'
    },
    {
      id: 11,
      date: '2024-08-25',
      region: 'Ninguna',
      prediction: 'Ningun desastre naturale relacionado con el Fenomeno del Niño',
      dangerIndicator: 'warning'
    },
    {
      id: 12,
      date: '2024-08-25',
      region: 'Ninguna',
      prediction: 'Ningun desastre naturale relacionado con el Fenomeno del Niño',
      dangerIndicator: 'danger'
    },
    {
      id: 13,
      date: '2024-08-25',
      region: 'Ninguna',
      prediction: 'Ningun desastre naturale relacionado con el Fenomeno del Niño',
      dangerIndicator: 'good'
    },
    {
      id: 14,
      date: '2024-08-25',
      region: 'Ninguna',
      prediction: 'Ningun desastre naturale relacionado con el Fenomeno del Niño',
      dangerIndicator: 'good'
    },
  ]

  const getRowStyles = ( dangerIndicator : string ) => {
    switch ( dangerIndicator ) {
      case "good":
        return {
          base: "border-[#E6F2F2] hover:bg-[#F0F8F8]",
          text: "text-[#3A5F5F]"
        }
      case "warning":
        return {
          base: "border-[#FFE0B2] bg-[#FFF3E0] hover:bg-[#FFE0B2]",
          text: "text-[#E65100]"
        }
      case "danger":
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
        <h2 className="text-2xl font-bold"> Historial de Predicciones </h2>
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
            }
            </tbody>
          </table>

        </section>

      </article>
  )
}
