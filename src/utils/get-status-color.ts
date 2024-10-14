

export const getStatusColor = ( status : boolean ) => {
  if ( status ) {
    return 'bg-teal-500 text-white'
  } else {
    return 'bg-red-500 text-white'
  }
}
