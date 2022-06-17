import styled from "styled-components";

export const FlexContainer = styled.div`
  max-width: 800px;
  min-width: 280px;
  margin: 0 auto;
  display: flex;
  flex-direction: ${(props)=> props.flexDir || "column"};
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  text-align: center;

  /* h1 {
    max-width: 800px;
  } */
`