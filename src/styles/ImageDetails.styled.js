import styled from "styled-components";

export const StyledImageDetails = styled.div`
   position: relative;
   height: 85gitvh;
   margin: 1rem 0;
   div {
    background-color: #000;
    border-radius: 0.2rem;
    margin: 0;
    padding: 0.25rem 1rem 0 1rem;
   }
   img {
    height: 100%;
    max-width: 20rem;
    margin: 0 0.5rem;
    border-radius: 0.2rem;
   }
   .albumTitle:hover::after {
      position: absolute;
      top: 20px;
      content: 'open';
   }
  
`