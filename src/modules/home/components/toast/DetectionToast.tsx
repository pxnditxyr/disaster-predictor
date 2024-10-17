
import { useState, useEffect, useRef } from 'react'
import { formatDate, getPredictions } from '@/utils'
import type { IDisaster, IPrediction } from '@/interfaces'

interface IProps {
  disasterTypes: IDisaster[]
}

export const DetectionToast = ( { disasterTypes } : IProps ) => {

  const [ activeDetection, setActiveDetection ] = useState<IPrediction | null>( null )
  const [ isVisible, setIsVisible ] = useState( false )
  const audioRef = useRef<HTMLAudioElement | null>( null )

  const [ predictions, setPredictions ] = useState<IPrediction[] | null>( null )

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

  useEffect( () => {
    if ( predictions !== null )  {
      const predictionWithRegion = predictions.filter( p => p.region !== 'Ninguna' )
      if ( predictionWithRegion.length > 0 ) {
        setActiveDetection( predictionWithRegion[ 0 ] )
        setIsVisible( true )
        if ( audioRef.current ) {
          audioRef.current.play()

          setTimeout(() => {
            if (audioRef.current) {
              audioRef.current.pause()
              audioRef.current.currentTime = 0
            }
          }, 5000)
        }
      }
    }
  }, [ predictions ] )

  if ( !isVisible || !activeDetection || !activeDetection.region ) return null

  const { region, prediction, dangerIndicator, date } = activeDetection

  const getRiskLevel = ( dangerIndicator : string ) => {
    switch ( dangerIndicator ) {
      case 'nivel bajo': return 1
      case 'nivel moderado': return 2
      case 'nivel alto': return 3
      default: return 0
    }
  }

  const riskLevel = getRiskLevel( dangerIndicator )

  const getBackgroundColor = ( level : number ) => {
    switch ( level ) {
      case 1: return 'bg-[#e6fff7]' // Teal Cream
      case 2: return 'bg-[#fff5e6]' // Light Orange Cream
      case 3: return 'bg-[#ffe6e6]' // Light Red Cream
      default: return 'bg-[#f5f5f5]' // Default Cream
    }
  }

  const getEmoji = ( level: number ) => {
    switch ( level ) {
      case 1: return '✅'
      case 2: return '⚠️'
      case 3: return '🚨'
      default: return '📢'
    }
  }

  const getRiskIcon = ( level : number ) => {
    switch ( level ) {
      case 1:
        return (
          <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        )
      case 2:
        return (
          <svg className="w-8 h-8 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        )
      case 3:
        return (
          <svg className="w-8 h-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        )
      default:
        return (
          <svg className="w-8 h-8 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        )
    }
  }

  return (
    <>
      <audio ref={ audioRef } src="/alarm.ogg" />
      <div className={`fixed top-4 left-1/2 transform -translate-x-1/2 w-[32rem] p-6 rounded-xl shadow-2xl ${getBackgroundColor(riskLevel)} backdrop-filter backdrop-blur-lg bg-opacity-90 border border-white border-opacity-20 transition-all duration-300 ease-in-out z-50`}>
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0">
            { getRiskIcon( riskLevel ) }
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <p className="text-2xl font-bold text-gray-900 mb-2">
                { getEmoji( riskLevel ) } Nivel de Riesgo: { riskLevel }
              </p>
              <button
                onClick={ () => setIsVisible(false) }
                className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <p className="text-lg font-medium text-gray-900 mb-2 capitalize">
              { prediction }
            </p>
            <div className="flex items-center mt-4 text-sm text-gray-600">
              <p> { disasterTypes.find( d => d.name === activeDetection?.prediction )?.description }</p>
            </div>
            <div className="flex items-center mt-4 text-sm text-gray-600">
              <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span> { formatDate( date ) }</span>
              <svg className="w-5 h-5 ml-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="capitalize">{ region }</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

