import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { formatDate, generateMonthLinkForScraping, getPageData } from '@/utils'

const steps = [
  {
    title: 'Generación de enlaces 📊',
    description: 'Se generan enlaces para la extracción de datos climáticos.',
    icon: '🔗',
    link: '#step-1'
  },
  {
    title: 'Extracción de datos 🔍',
    description: 'Se realiza una extracción de datos web para obtener los datos climáticos',
    icon: '🌡️',
    link: '#step-2'
  },
  {
    title: 'Preparación de datos 🧠',
    description: 'Se preparan los datos para la inserción en el Modelo Transformer.',
    icon: '🔬',
    link: '#step-3'
  },
  {
    title: 'Envío de datos y petición a la red neuronal ⚠️',
    description: "Se envían los datos al modelo Transformer para obtener la predicción.",
    icon: '🚀',
    link: '#step-4'
  },
  {
    title: 'Post procesamiento de los datos 🌍',
    description: "Mostramos los resultados.",
    icon: '📊',
    link: '#step-5'
  },
]


export const Steps = () => {
  const [ activeStep, setActiveStep ] = useState( 0 )

  const [ desiredDate, setDesiredDate ] = useState( new Date().toISOString().split('T')[0] )
  const [ generatedLink, setGeneratedLink ] = useState<string[]>([])
  const [ neededDates, setNeededDates ] = useState<{ startDate: string, finalDate: string } | null>( null )

  const [ activeTab, setActiveTab ] = useState( 'table' )
  const [ isScraping, setIsScraping ] = useState( false )
  const [ scrapingData, setScrapingData ] = useState<any>( null )

  useEffect(() => {
    const element = document.getElementById( steps[ activeStep ].link.slice( 1 ) )
    if ( element ) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }, [ activeStep ])

  // Steps
  const handleNext = () => {
    if ( activeStep < steps.length - 1 ) {
      setActiveStep( activeStep + 1 )
    }
  }

  const handlePrevious = () => {
    if ( activeStep > 0 ) {
      setActiveStep( activeStep - 1 )
    }
  }

  // INFO: Step 1
  const handlerGenerateLinks = () => {
    const generatedLinks = generateMonthLinkForScraping( desiredDate )
    setGeneratedLink( generatedLinks.links )
    setNeededDates({
      startDate: formatDate( generatedLinks.startDate ),
      finalDate: formatDate( generatedLinks.finalDate )
    })
  }

  // INFO: Step 2
  const handlerScraping = async () => {
    setIsScraping( true )
    const data = await getPageData( generatedLink[ 0 ] )
    setScrapingData( data )
    setIsScraping( false )
  }

  return (
    <div className="bg-cream-100 text-teal-800">
      { steps.map( ( step, index ) => (
        <motion.section
          key={ step.link }
          id={ step.link.slice( 1 ) }
          className="min-h-screen flex flex-col justify-center items-center p-8 relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="max-w-4xl w-full">
            <motion.div
              className="text-9xl mb-8 text-center"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
            >
              { step.icon }
            </motion.div>
            <h2 className="text-4xl font-bold mb-4 text-center">{step.title}</h2>
            <p className="text-xl mb-8 text-center">{step.description}</p>

            { index === 0 && (
              <div className="bg-white rounded-lg shadow-md mb-8 p-6">
                <h3 className="text-2xl font-semibold mb-4"> Generador de Enlaces </h3>
                <div className="flex items-center space-x-4">
                  <input
                    type="date"
                    value={ desiredDate }
                    onChange={ ( e ) => setDesiredDate( e.target.value ) }
                    max={ new Date().toISOString().split( 'T' )[ 0 ] }
                    className="flex-grow p-2 border border-gray-300 rounded"
                  />
                  <button
                    onClick={ handlerGenerateLinks }
                    className="bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700 transition-colors"
                  >
                    Generar Enlaces
                  </button>
                </div>
                {
                  ( generatedLink.length > 0 && neededDates ) && (
                    <div className="mt-4 overflow-y-auto h-80">
                      <h4 className="text-lg font-bold mt-4">Enlaces Generados</h4>
                      <p className="mb-1"> Fecha de Inicio: { neededDates.startDate } </p>
                      <p className="mb-3"> Fecha Final: { neededDates.finalDate } </p>

                      <ul className="list-disc list-inside space-y-2">
                        { generatedLink.map( ( link, i ) => (
                          <li key={ i }><a href={ link } target="_blank" rel="noreferrer">{ link }</a></li>
                        ) ) }
                      </ul>
                    </div>
                  )
                }
              </div>
            ) }

            { ( index === 1 ) && (
              <div className="bg-white rounded-lg shadow-md mb-8 p-6">
                <h3 className="text-2xl font-semibold mb-4">Extracción de Datos</h3>
                <div className="flex items-center space-x-4">
                  <button
                    onClick={ handlerScraping }
                    className="bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700 transition-colors"
                  >
                    { isScraping ? 'Extrayendo...' : 'Extraer Datos' }
                  </button>
                </div>
                <h3 className="text-2xl font-semibold mb-4">Datos Extraídos</h3>
                <div className="mb-4">
                  <button
                    onClick={ () => setActiveTab('table') }
                    className={ `mr-2 px-4 py-2 rounded ${activeTab === 'table' ? 'bg-teal-600 text-white' : 'bg-gray-200'}` }
                  >
                    Tabla
                  </button>
                  <button
                    onClick={() => setActiveTab('json')}
                    className={`px-4 py-2 rounded ${activeTab === 'json' ? 'bg-teal-600 text-white' : 'bg-gray-200'}`}
                  >
                    JSON
                  </button>
                </div>
                { activeTab === 'table' ? (
                  <table className="w-full">
                    <thead>
                      <tr>
                        <th className="text-left p-2">Fecha</th>
                        <th className="text-left p-2">Temperatura</th>
                        <th className="text-left p-2">Humedad</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="p-2">2023-05-01</td>
                        <td className="p-2">22°C</td>
                        <td className="p-2">65%</td>
                      </tr>
                      <tr>
                        <td className="p-2">2023-05-02</td>
                        <td className="p-2">24°C</td>
                        <td className="p-2">60%</td>
                      </tr>
                      <tr>
                        <td className="p-2">2023-05-03</td>
                        <td className="p-2">23°C</td>
                        <td className="p-2">62%</td>
                      </tr>
                    </tbody>
                  </table>
                ) : (
                  <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
                    {
                      JSON.stringify( [], null, 2 )
                    }
                  </pre>
                ) }
              </div>
            ) }

            {index === 2 && (
              <div className="bg-white rounded-lg shadow-md mb-8 p-6">
                <h3 className="text-2xl font-semibold mb-4">Preparación de Datos</h3>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="normalize" className="block text-sm font-medium text-gray-700 mb-1">Normalización</label>
                    <input
                      id="normalize"
                      type="text"
                      value="(x - mean) / std_dev"
                      readOnly
                      className="w-full p-2 border border-gray-300 rounded"
                    />
                  </div>
                  <div>
                    <label htmlFor="encode" className="block text-sm font-medium text-gray-700 mb-1">Codificación</label>
                    <input
                      id="encode"
                      type="text"
                      value="One-hot encoding para variables categóricas"
                      readOnly
                      className="w-full p-2 border border-gray-300 rounded"
                    />
                  </div>
                  <div>
                    <label htmlFor="split" className="block text-sm font-medium text-gray-700 mb-1">División de datos</label>
                    <input
                      id="split"
                      type="text"
                      value="70% entrenamiento, 15% validación, 15% prueba"
                      readOnly
                      className="w-full p-2 border border-gray-300 rounded"
                    />
                  </div>
                </div>
              </div>
            )}

            {index === 3 && (
              <div className="bg-white rounded-lg shadow-md mb-8 p-6">
                <h3 className="text-2xl font-semibold mb-4">Envío de Datos al Modelo</h3>
                <div className="space-y-4">
                  <p>Enviando datos al modelo Transformer...</p>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <motion.div
                      className="bg-teal-600 h-2.5 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: '100%' }}
                      transition={{ duration: 2 }}
                    />
                  </div>
                  <p>Procesando predicción...</p>
                </div>
              </div>
            )}

            {index === 4 && (
              <div className="bg-white rounded-lg shadow-md mb-8 p-6">
                <h3 className="text-2xl font-semibold mb-4">Resultados de la Predicción</h3>
                <div className="h-[300px] w-full">
                  { /*
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={mockWeatherData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="temp" fill="#0d9488" />
                      </BarChart>
                    </ResponsiveContainer>
                     */ }
                </div>
                <p className="mt-4 text-center">Predicción de temperaturas para los próximos 6 meses</p>
              </div>
            )}

            <div className="flex justify-center space-x-4">
              {index > 0 && (
                <button
                  onClick={ handlePrevious }
                  className="bg-white text-teal-600 border border-teal-600 px-4 py-2 rounded hover:bg-teal-50 transition-colors"
                >
                  Anterior
                </button>
              )}
              { index < steps.length - 1 && (
                <button
                  onClick={handleNext}
                  className="bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700 transition-colors"
                >
                  Siguiente
                </button>
              ) }
            </div>
          </div>
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <div className="flex space-x-2">
              { steps.map((_, i) => (
                <motion.div
                  key={i}
                  className={`w-3 h-3 rounded-full ${i === index ? 'bg-teal-600' : 'bg-teal-300'}`}
                  animate={{ scale: i === index ? 1.2 : 1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 10 }}
                />
              )) }
            </div>
          </div>
        </motion.section>
      ) ) }
    </div>
  )
}
