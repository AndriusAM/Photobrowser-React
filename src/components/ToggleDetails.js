import React from 'react'
import { StyledToggleDetails } from '../styles/ToggleDetails.styled'

function ToggleDetails({title, handleClick, photoId}) {
    
  return (
    <StyledToggleDetails>
      <button onClick={()=>handleClick()}>{title}</button>
    </StyledToggleDetails>
  )
}

export default ToggleDetails