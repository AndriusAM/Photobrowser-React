import React from 'react'
import { StyledButton } from '../styles/ToggleDetails.styled'

function ToggleDetails({title, handleClick, photoId}) {
    
  return (
    <StyledButton onClick={()=>handleClick(photoId)}>
      {title}
    </StyledButton>
  )
}

export default ToggleDetails