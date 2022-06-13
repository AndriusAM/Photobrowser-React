import React from 'react'
import { StyledToggleDetails } from '../styles/ToggleDetails.styled'
import capitalize from './capitalize'
import ToggleDetails from './ToggleDetails'

function ListOfPhotosCard({photos, handleClick}) {
  
  return (
    <>
    {
      photos.slice(0, 20).map(item => 
      
        <li key={item.id}>
          <div>
            
              <img src={item.thumbnailUrl} onClick={() => handleClick(item.id)} alt="Thumbnail did not load"/>
            
          </div>           
                 
          </li>
      
      ) 
    }
    </>
  )
}

export default ListOfPhotosCard