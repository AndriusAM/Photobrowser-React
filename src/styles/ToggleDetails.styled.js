import styled from "styled-components";

export const StyledToggleDetails = styled.div`
  button {
  background-color: #111827;
  border: 1px solid transparent;
  border-radius: .75em;
  color: #FFFFFF;
  cursor: pointer;
  flex: 0 0 auto;
  font-size: 1.125rem;
  font-weight: 600;
  line-height: 1.5em;
  padding: .5em 1.2em;
  
}

button:hover {
  background-color: #374151;
}

button:focus {
  box-shadow: none;
  outline: 2px solid transparent;
  outline-offset: 2px;
}
`