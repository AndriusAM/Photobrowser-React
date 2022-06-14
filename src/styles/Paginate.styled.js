import styled from "styled-components";
import ReactPaginate from "react-paginate";

export const StyledReactPaginate = styled(ReactPaginate)`
  display: flex;
  a {
    padding: 0.25em 0.4em;
    margin: 0.25em;
    cursor: pointer;
    border: 1px solid white;
    border-radius: 5px;
  }
  li {
    list-style: none;
  }
  .selected a {
    background-color: white;
    color: black;
  }
`