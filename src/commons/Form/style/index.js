import styled, { css } from 'styled-components';

export const InputFieldWrapper = styled.div`
  margin-top: 0;
  position: relative;
`;

export const readOnlyWrapper = css`
  border-bottom-color: '#e2e2e2',
  border-bottom-width: 1,
  flex             : 1
`;

export const ErrorField = styled.div`
  margin-top: 1px;
  margin-bottom: 1px;
  border-color: #de0a17;
  background-color: #fdeded;
`;

export const ErrorText = styled.p`
  color: red;
  margin-top: 2;
`;

export const FieldWrapper = styled.div`
  height: 46;
  border-width: 1;
  border-color: '#e2e2e2';
  border-radius: 4;
  flex: 1;
  justify-content: 'center';
  padding-left: 10;
  margin-top: 5;
`;
