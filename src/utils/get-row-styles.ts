export const getRowStyles = ( dangerIndicator : number ) => {
  switch ( dangerIndicator ) {
    case 1:
      return {
        base: "border-[#E6F2F2] hover:bg-[#F0F8F8]",
        text: "text-[#3A5F5F]"
      }
    case 2:
      return {
        base: "border-[#FFE0B2] bg-[#FFF3E0] hover:bg-[#FFE0B2]",
        text: "text-[#E65100]"
      }
    case 3:
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

