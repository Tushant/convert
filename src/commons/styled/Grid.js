import styled from "styled-components";

export const Row = styled.div`
  display: flex;
  flex: 1;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: ${props => (props.width ? `${props.width}%` : "100%")};
`;
