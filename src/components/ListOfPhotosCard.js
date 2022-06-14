import React from 'react'


function ListOfPhotosCard({photos, handleClick}) {
  
  return (
    <>
    {
      photos.map(item => 
      
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