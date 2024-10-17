import { useState, useEffect, useRef } from 'react'
import type { IMitigationAction, IDisaster, IMitigationPlan } from '@/interfaces'
import { formatDate, generateMitigationPlan, getPredictions } from '@/utils'

interface IProps {
  mitigationActions: IMitigationAction[]
  disasterTypes: IDisaster[]
}

export const MitigationToast = ( { mitigationActions, disasterTypes } : IProps ) => {

  const [ activeMitigation, setActiveMitigation ] = useState<IMitigationPlan | null>( null )
  const [ isVisible, setIsVisible ] = useState( false )
  const audioRef = useRef<HTMLAudioElement | null>( null )

  const [ mitigationPlan, setMitigationPlan ] = useState<IMitigationPlan[] | null>( null )

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
    if ( mitigationPlan !== null )  {
      const mitigationPlanWithActions = mitigationPlan.filter( m => m.mitigationAction !== null )
      if ( mitigationPlanWithActions.length > 0 ) {
        setActiveMitigation( mitigationPlanWithActions[ 0 ] )
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
  }, [ mitigationPlan ] )

  if (!isVisible || !activeMitigation || !activeMitigation.mitigationAction) return null

  const { mitigationAction } = activeMitigation
  const { riskLevel, description, actionList } = mitigationAction

  const getBackgroundColor = (level: number) => {
    switch ( level ) {
      case 1: return 'bg-[#e6fff7]' // Teal Cream
      case 2: return 'bg-[#fff5e6]' // Light Orange Cream
      case 3: return 'bg-[#ffe6e6]' // Light Red Cream
      default: return 'bg-[#f5f5f5]' // Default Cream
    }
  }

  const getEmoji = (level: number) => {
    switch (level) {
      case 1: return '✅'
      case 2: return '⚠️'
      case 3: return '🚨'
      default: return '📢'
    }
  }

  const getRiskIcon = (level: number) => {
    switch (level) {
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
      <div className={`fixed top-4 left-1/2 transform -translate-x-1/2 w-[32rem] p-6 rounded-xl shadow-2xl ${getBackgroundColor(riskLevel)} backdrop-filter backdrop-blur-lg bg-opacity-90 border border-white border-opacity-20 transition-all duration-300 ease-in-out z-20`}>
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0">
            { getRiskIcon( riskLevel ) }
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <p className="text-2xl font-bold text-gray-900 mb-2">
                { getEmoji( riskLevel ) } Risk Level: { riskLevel }
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
            <p className="text-lg font-medium text-gray-900 mb-2">
              {description}
            </p>
            <div className="bg-white bg-opacity-50 rounded-lg p-3 mt-2">
              <p className="text-sm font-semibold text-gray-700 mb-1"> Lista de Acciones </p>
              <ul className="list-disc list-inside text-sm text-gray-600">
                { actionList.split(';').map((action, index) => (
                  <li key={index}>{action.trim()}</li>
                )) }
              </ul>
            </div>
            <div className="flex items-center mt-4 text-sm text-gray-600">
              <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span> { formatDate( activeMitigation.date ) }</span>
              <svg className="w-5 h-5 ml-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>{ activeMitigation.address }</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
