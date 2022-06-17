import React, {useState} from 'react'
import { FlexContainer } from '../styles/Flex';
import { StyledImageDetails } from '../styles/ImageDetails.styled'

import ListOfPhotosCard from './ListOfPhotosCard';
import capitalize from './capitalize';
import { StyledButton } from '../styles/ToggleDetails.styled';

function ImageDetails({allPhotos, photo}) {
  const [renderAlbum, setRenderAlbum] = useState(false);
  const albumPhotos = allPhotos.filter(item => item.albumId === photo.albumId)
  
  return <>
          {!renderAlbum? 
            <StyledImageDetails>
            <div><img src={photo.url} alt=""/></div>
            <h2>{capitalize(photo.title)}</h2>
            <p className="albumTitle" onClick={()=> setRenderAlbum(true)}>Album {photo.albumId}</p>
            </StyledImageDetails>:
          <>
            <FlexContainer flexDir="row">
              <h3>Album {photo.albumId}</h3>
              <ListOfPhotosCard photos={albumPhotos}/>
            </FlexContainer>
            <StyledButton title={""} 
            onClick={()=> setRenderAlbum(false)}>
              Back to Photo...
            </StyledButton>
          </>
          }
        </>
      
    
  
}

export default ImageDetails