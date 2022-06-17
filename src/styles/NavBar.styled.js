import styled from "styled-components";

export const StyledNavBar = styled.nav`
  font-size: 0.8rem;
  margin: 0;
  display: flex;
  padding: 1rem;
  justify-content: space-between; 
  align-items: flex-start;
  div:first-child {
    padding: 0 1.5rem 0 0;
  }
  ul {
    display: flex;
    margin: 0;
    padding: 0;
  }
  li {
    margin: 0;
    list-style: none;
    padding:  0 1.5rem;
  }
 
`