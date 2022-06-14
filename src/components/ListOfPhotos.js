import React, {useState, useEffect} from 'react'
import { StyledListOfPhotos } from '../styles/ListOfPhotos.styled'
import ToggleDetails from './ToggleDetails'
import ImageDetails from './ImageDetails';
import ListOfPhotosCard from './ListOfPhotosCard';
import { StyledImageDetails } from '../styles/ImageDetails.styled';

function ListOfPhotos({photos}) {
  const [showDetails, setShowDetails] = useState(false);
  const [clickedPhotoId, setClickedPhotoId] = useState(null);
  console.log("Photos in LIstOfPhotos:", photos)
  

  const handleClick = (id) => {
    console.log('clicked')
    setShowDetails(prevState=>!prevState)
    setClickedPhotoId(id)
  }
    
  const clickedPhoto = photos.find(item=>item.id===clickedPhotoId)

  return (
    <>
    {!showDetails? 
    (<StyledListOfPhotos>
      <ListOfPhotosCard photos={photos} handleClick={handleClick} />
     </StyledListOfPhotos>):
    (<>
    <StyledImageDetails>
    <ImageDetails photo={clickedPhoto? clickedPhoto : null}/>
    <ToggleDetails title={'Back to Photobrowser...'} handleClick={handleClick} />
    </StyledImageDetails>
    </>
    )
    }
    </>
  )
}

export default ListOfPhotos