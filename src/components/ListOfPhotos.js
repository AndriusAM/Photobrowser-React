import React, {useState} from 'react'
import { StyledListOfPhotos } from '../styles/ListOfPhotos.styled'
import ToggleDetails from './ToggleDetails'
import ImageDetails from './ImageDetails';
import ListOfPhotosCard from './ListOfPhotosCard';
import { StyledImageDetails } from '../styles/ImageDetails.styled';

function ListOfPhotos({photos}) {
  const [showDetails, setShowDetails] = useState(false);
  const [clickedPhotoId, setClickedPhotoId] = useState(null);
  
  const handleClick = (id) => {
    console.log('clicked')
    setShowDetails(prevState=>!prevState)
    setClickedPhotoId(id)
  }
  
  return (
    <>
    {!showDetails? (<StyledListOfPhotos>
    <ul>
      <ListOfPhotosCard photos={photos} handleClick={handleClick} />
    </ul>
    </StyledListOfPhotos>) :
    (<>
    <StyledImageDetails>
    <ImageDetails photo={typeof clickedPhotoId ==='number'? photos[clickedPhotoId] : null}/>
    </StyledImageDetails>
    <ToggleDetails title={'Back to Photobrowser...'} handleClick={handleClick} />
    </>
    )
    }
    </>
  )
}

export default ListOfPhotos