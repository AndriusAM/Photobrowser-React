import styled from "styled-components";

export const StyledListOfPhotos = styled.div`
  
  margin-bottom: 150px;

  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 50px;
  }
  h4 {
    padding: 0px;
    margin: 0;
  }
  ul>li {
    // margin: 5px;
    list-style-type: none;
    
  }

  img {
    width: 10em;
    margin: 0.5em;
    border-radius: 0.5em;
  }
  img:hover {
    box-shadow: 3.5px 3.5px rgb(80,201,200), 7px 7px rgb(255,255,255);
    }
  
  
`