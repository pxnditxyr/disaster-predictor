
export const AllMitigations = () => {

  const mitigations = [
    {
      id: 1,
      date: '2024-08-25',
      region: 'Ninguna',
      dangerIndicator: 'good',
      mitigation: 'Ninguna acción de mitigación necesaria'
    },
    {
      id: 2,
      date: '2024-08-25',
      region: 'Ninguna',
      dangerIndicator: 'warning',
      mitigation: 'Ninguna acción de mitigación necesaria'
    },
    {
      id: 3,
      date: '2024-08-25',
      region: 'Ninguna',
      dangerIndicator: 'danger',
      mitigation: 'Ninguna acción de mitigación necesaria'
    },
    {
      id: 4,
      date: '2024-08-25',
      region: 'Ninguna',
      dangerIndicator: 'good',
      mitigation: 'Ninguna acción de mitigación necesaria'
    },
    {
      id: 5,
      date: '2024-08-25',
      region: 'Ninguna',
      dangerIndicator: 'warning',
      mitigation: 'Ninguna acción de mitigación necesaria'
    },
    {
      id: 6,
      date: '2024-08-25',
      region: 'Ninguna',
      dangerIndicator: 'danger',
      mitigation: 'Ninguna acción de mitigación necesaria'
    },
    {
      id: 7,
      date: '2024-08-25',
      region: 'Ninguna',
      dangerIndicator: 'good',
      mitigation: 'Ninguna acción de mitigación necesaria'
    },

    // generate 10 more
    {
      id: 8,
      date: '2024-08-25',
      region: 'Ninguna',
      dangerIndicator: 'warning',
      mitigation: 'Ninguna acción de mitigación necesaria'
    },
    {
      id: 9,
      date: '2024-08-25',
      region: 'Ninguna',
      dangerIndicator: 'danger',
      mitigation: 'Ninguna acción de mitigación necesaria'
    },
    {
      id: 10,
      date: '2024-08-25',
      region: 'Ninguna',
      dangerIndicator: 'good',
      mitigation: 'Ninguna acción de mitigación necesaria'
    },
    {
      id: 11,
      date: '2024-08-25',
      region: 'Ninguna',
      dangerIndicator: 'warning',
      mitigation: 'Ninguna acción de mitigación necesaria'
    },
    {
      id: 12,
      date: '2024-08-25',
      region: 'Ninguna',
      dangerIndicator: 'danger',
      mitigation: 'Ninguna acción de mitigación necesaria'
    },
    {
      id: 13,
      date: '2024-08-25',
      region: 'Ninguna',
      dangerIndicator: 'good',
      mitigation: 'Ninguna acción de mitigación necesaria'
    },
    {
      id: 14,
      date: '2024-08-25',
      region: 'Ninguna',
      dangerIndicator: 'warning',
      mitigation: 'Ninguna acción de mitigación necesaria'
    },
    {
      id: 15,
      date: '2024-08-25',
      region: 'Ninguna',
      dangerIndicator: 'danger',
      mitigation: 'Ninguna acción de mitigación necesaria'
    },
    {
      id: 16,
      date: '2024-08-25',
      region: 'Ninguna',
      dangerIndicator: 'good',
      mitigation: 'Ninguna acción de mitigación necesaria'
    },
    {
      id: 17,
      date: '2024-08-25',
      region: 'Ninguna',
      dangerIndicator: 'warning',
      mitigation: 'Ninguna acción de mitigación necesaria'
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
        <h2 className="text-2xl font-bold"> Historial de Acciones de Mitigación </h2>
      </section>

        <section className="w-full overflow-x-auto max-w-[950px] max-h-[600px]">
          <table className="w-full">
            <thead>
              <tr className="bg-[#B8d8d8]">
                <th className="text-teal-700 text-left font-semibold py-4 px-4 first:rounded-tl-lg"> Fecha </th>
                <th className="text-teal-700 text-left font-semibold py-4 px-4"> Región </th>
                <th className="text-teal-700 text-left font-semibold py-4 px-4"> Acción de Mitigación </th>
                <th className="text-teal-700 text-left font-semibold py-4 px-4 last:rounded-tr-lg"> Indicador de Peligro </th>
              </tr>
            </thead>
            <tbody>
              {
                mitigations.map( ( mitigation ) => {
                  const styles = getRowStyles( mitigation.dangerIndicator )
                  return (
                    <tr
                      key={ mitigation.id }
                      className={ `border-b transition-colors ${ styles.base }` }
                    >
                      <td className={ `py-3 px-4 ${ styles.text }` }>{ mitigation.date }</td>
                      <td className={ `py-3 px-4 ${ styles.text }` }>{ mitigation.region }</td>
                      <td className={ `py-3 px-4 ${ styles.text }` }>{ mitigation.mitigation }</td>
                      <td className={ `py-3 px-4 ${ styles.text }` }>{ mitigation.dangerIndicator }</td>
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
