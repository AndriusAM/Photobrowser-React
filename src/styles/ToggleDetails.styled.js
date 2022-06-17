import styled from "styled-components";

export const StyledButton = styled.button`
  
  background-color: #111827;
  border: 1px solid transparent;
  border-radius: .75em;
  color: #FFFFFF;
  cursor: pointer;
  flex: 0 0 auto;
  font-size: 0.5rem;
  font-weight: 600;
  line-height: 1.5em;
  padding: .4em 1.2em;
  margin-top: 0.2rem;
  


&:hover {
  background-color: #374151;
}

&:focus {
  box-shadow: none;
  outline: 2px solid transparent;
  outline-offset: 2px;
}
`