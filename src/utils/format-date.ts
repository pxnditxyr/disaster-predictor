
export const formatDate = ( date : Date ) => {
  return date.toLocaleDateString( 'es-ES', { day: 'numeric', month: 'long', year: 'numeric' } )
}
