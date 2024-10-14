
export const getRiskLevelName = ( level : number ) => {
  switch ( level ) {
    case 1:
      return 'Bajo'
    case 2:
      return 'Moderado'
    case 3:
      return 'Alto'
    default:
      return 'Ninguno'
  }
}

