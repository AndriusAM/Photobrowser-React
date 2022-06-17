import React, {useState} from 'react'
import { StyledRenderPhotos } from '../styles/RenderPhotos.styled'
import ToggleDetails from './ToggleDetails'
import ImageDetails from './ImageDetails';
import ListOfPhotosCard from './ListOfPhotosCard';

import { FlexContainer } from '../styles/Flex';


function RenderPhotos({allPhotos, pagePhotos, pageDisplay}) {
  const [showDetails, setShowDetails] = useState(false);
  const [clickedPhotoId, setClickedPhotoId] = useState(null);
  console.log("Photos in LIstOfPhotos:", pagePhotos)
  
  

  const handleClick = (id) => {
    console.log('clicked')
    setShowDetails(prevState=>!prevState)
    setClickedPhotoId(id)
    pageDisplay(prevState=> !prevState)
  }

  
     
  const clickedPhoto = pagePhotos.find(item=>item.id===clickedPhotoId)

  return (
    <>
    {!showDetails? 
      (<StyledRenderPhotos>
          <ListOfPhotosCard 
          photos={pagePhotos} 
          handleClick={handleClick} />
      </StyledRenderPhotos>):
      (<>
      <FlexContainer>
          <ImageDetails 
          allPhotos={allPhotos} 
          photo={clickedPhoto? clickedPhoto : null}/>
          <ToggleDetails 
          title={'Back to Photobrowser...'} handleClick={handleClick} />
      </FlexContainer>
      </>
      )
    }
    </>
  )
}

export default RenderPhotos