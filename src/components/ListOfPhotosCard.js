import React from 'react'
import { FlexContainer } from '../styles/Flex'
import { StyledImages } from '../styles/StyledImages'


function ListOfPhotosCard({photos, handleClick}) {
  
  return (
    <StyledImages>
    
      <FlexContainer flexDir="row">
        
        {photos.map(item => 
      
      <li key={item.id}>
        <div>
          
            <img src={item.thumbnailUrl} onClick={() => handleClick(parseInt(item.id))} alt="Thumbnail did not load"/>
          
        </div>           
               
        </li>
    
    ) }

      </FlexContainer>
      
    
    </StyledImages>
  )
}

export default ListOfPhotosCard