
import Header from './components/Header';
import Footer from './components/Footer';
import api from './api/photos'
import { useState, useEffect } from 'react';
import ListOfPhotos from './components/ListOfPhotos';


function App() {
  
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  
  
  useEffect(()=>{
    const fetchPhotos = async () => {
      try{
        const response = await api.get('/photos')
        if(response.data){
          setPhotos(response.data)}
          setLoading(false)
          console.log(response.data)
        } catch(error){
          if(error.response){
            setLoading(false)
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
          } else {
            console.log(`Error! ${error.request || error.message}`)
          }
        }
      };
      fetchPhotos();
    }, [])
    console.log(photos[0])
    

  return (
    <div>
      <Header />
      {loading? 'Loading...Please wait' : <ListOfPhotos photos={photos} />}
      <Footer />
    </div>
  );
}

export default App;
