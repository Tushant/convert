import styled from 'styled-components';

export const Wrapper = styled.div`

`;

export const CanvasWrapper = styled.div`
  padding: 0 3em;
`;

export const Row = styled.div`
  display: flex;
  flex: 1;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: ${props => (props.width ? `${props.width}%` : "100%")};
`;
