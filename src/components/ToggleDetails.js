import React from 'react'
import { StyledToggleDetails } from '../styles/ToggleDetails.styled'

function ToggleDetails({title, handleClick, photoId}) {
    
  return (
    <StyledToggleDetails onClick={()=>handleClick(photoId)}>
      {title}
    </StyledToggleDetails>
  )
}

export default ToggleDetails