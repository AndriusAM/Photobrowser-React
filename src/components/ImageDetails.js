import React from 'react'

function ImageDetails({photo}) {
  
  return (
    <>
      <div className="container">
      <img src={photo.url} alt=""/>
      <h4>{photo.title}</h4>
      <h5>Album {photo.albumId}</h5>
      </div>
    </>
  )
}

export default ImageDetails