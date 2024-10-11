import { Icon } from 'astro-icon/components'
import { useEffect, useState } from 'react'


export const DisastersList = () => {

  const [ disasters, setDisasters ] = useState<any>( null )

  useEffect( () => {
    console.log( 'useEffect' )
    //const fetchDisasters = async () => {
    //  const { data, error } = await actions.getDisasterType({})
    //  console.log( error )
    //  console.log( data )
    //  if ( data ) {
    //    setDisasters( data.disasterTypes )
    //  }
    //}
    //fetchDisasters()
  }, [] )

  return (
    <ul className="space-y-4">
      {
        ( disasters ) && (
        disasters.map( ( disaster : any ) => (
        <li key={disaster.id} className="bg-cream-50 rounded-lg p-4 flex items-center justify-between transition duration-300 ease-in-out transform hover:scale-102 hover:shadow-md">
          <div className="flex items-center space-x-4">
            <div className="text-4xl" role="img" aria-label={disaster.name}>
              {disaster.emoji}
            </div>
            <div>
              <h3 className="text-xl font-semibold text-coffee-700 flex items-center">
                <Icon name={disaster.icon} className="w-6 h-6 mr-2 text-teal-500" />
                {disaster.name}
              </h3>
              <p className="text-coffee-600 mt-1">{disaster.description}</p>
            </div>
          </div>
          <div className="flex space-x-2">
            <button
              className="p-2 text-teal-600 hover:bg-teal-100 rounded-full transition duration-300 ease-in-out"
              aria-label={`Editar ${disaster.name}`}
            >
              <Icon name="mdi:pencil" className="w-5 h-5" />
            </button>
            <button
              className="p-2 text-red-600 hover:bg-red-100 rounded-full transition duration-300 ease-in-out"
              aria-label={`Eliminar ${disaster.name}`}
            >
              <Icon name="mdi:delete" className="w-5 h-5" />
            </button>
          </div>
        </li>
      ) )
        )
      }
    </ul>
  )
}

