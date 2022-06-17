import styled from "styled-components";
import ReactPaginate from "react-paginate";

export const StyledReactPaginate = styled(ReactPaginate)`
  display: flex;
  padding: 0;
  margin: 0;
  a {
    font-size: 0.8rem;
    font-weight: 500;
    font-family: 'Times New Roman', Times, serif;
    padding: 0.25em 0.4em;
    margin: 0.25em;
    
    border: 1px solid #505050;
    border-radius: 5px;
  }
  
  
  .previous, .next {
    border: none;
  }
  
  .selected a {
    background-color: #202020;
    color: #fff;
  }

`