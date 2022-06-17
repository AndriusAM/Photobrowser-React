import styled from "styled-components";

export const FlexContainer = styled.div`
  max-width: 800px;
  min-width: 280px;
  margin: 0 auto;
  display: flex;
  flex-direction: ${(props)=> props.flexDir || "column"};
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-wrap: wrap;

`