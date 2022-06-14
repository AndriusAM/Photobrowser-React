
import Header from './components/Header';
import Footer from './components/Footer';
import api from './api/photos'
import { useState, useEffect } from 'react';
import ListOfPhotos from './components/ListOfPhotos';
import ReactPaginate from 'react-paginate';
import { FlexContainer } from './styles/Flex';
import { StyledReactPaginate } from './styles/Paginate.styled';


function App() {
  
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pageNumber, setPageNumber] = useState(0);
  
  
  useEffect(()=>{
    const fetchPhotos = async () => {
      try{
        const response = await api.get('/photos')
        if(response.data){
          setPhotos(response.data.slice(0, 100))}
          setLoading(false)
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
    
    const photosPerPage = 20;
    const pagesVisited = pageNumber*photosPerPage
    const pageCount = Math.ceil(photos.length / photosPerPage)
    const changePage = ({selected}) => {
      setPageNumber(selected)
    }
    const displayPhotos = photos.slice(pagesVisited, pagesVisited+photosPerPage)

  return (
    <FlexContainer>
      <Header />
      {loading? 'Loading...Please wait' :
       (<>
       <ListOfPhotos photos={displayPhotos}/>
       <StyledReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationButtons"}
        className="pagination"
        />
        </>)}
      <Footer />
    </FlexContainer>
  );
}

export default App;
