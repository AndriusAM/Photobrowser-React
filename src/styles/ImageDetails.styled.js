import styled from "styled-components";

export const StyledImageDetails = styled.div`
   position: relative;
   height: 85vh;
   margin: 1rem 0;
   div {
    background-color: #000;
    border-radius: 0.2rem;
    margin: 0;
    padding: 0.25rem 1rem 0 1rem;
   }
   img {
    max-width: 20rem;
    margin: 0 0.5rem;
    border-radius: 0.2rem;
   }
   .albumTitle {
      border: 2px solid #111827;
      border-radius: .75em;
      margin: 0.2rem auto;
      padding: .4em 1.2em;
      margin-top: 0.2rem;
      max-width: 5rem;
   }
   .albumTitle:hover {
      background-color: #111827;
      border: 1px solid transparent;
      border-radius: .75em;
      color: #FFFFFF;
      cursor: pointer;
      flex: 0 0 auto;
      font-weight: 600;
      line-height: 1.5em;
      padding: .4em 1.2em;
      margin-top: 0.2rem;
   }
  
`