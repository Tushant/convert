import styled from "styled-components";
import { Link } from "react-router-dom";

import { Box } from "commons/styled";
import { Row, Column } from "commons/styled/Grid";

export const LoginWrapper = styled(Box)`
  padding: 2rem;
  margin: 4rem auto;
  width: 450px;
`;

export const StyledLogo = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px auto;
  font-weight: bold;
  font-size: 3rem;
`;

export const Caption = styled.div`
  font-family: "montserrat", "Lato", sans-serif;
  font-size: 20px;
  text-align: center;
  padding: 20px 20px 0;
  color: var(--grey);
  margin-bottom: 20px;
`;

export const Form = styled.form`
  input[type="password"],
  input[type="text"],
  input[type="submit"] {
    width: 100%;
  }
  input[type="text"],
  input[type="password"],
  input[type="submit"] {
    padding: 1rem;
    color: #3a3f44;
  }
  input[type="submit"] {
    border-radius: 0.25rem;
  }
  input[type="text"],
  input[type="password"] {
    background-color: #ffffff;
    border-bottom-left-radius: 0;
    border-top-left-radius: 0;
  }
`;

export const Label = styled.label`
  color: var(--grey);
  margin-bottom: 5px;
`;

export const FormField = styled.div`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin-bottom: 2rem;
  flex-direction: column;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: center;
`;

export const Text = styled.p`
  color: var(--grey);
`;

export const CenterText = styled.p`
  color: var(--grey);
  font-size: 1.4rem;
  text-align: center;
`;

export const Anchor = styled(Link)`
  color: var(--primary);
`;

export const StyledRow = styled(Row)`
  margin: 0 auto;
  width: 150px;
`

export const StyledColumn = styled(Column)`
  align-items: center;
  justify-content: center;
`

export const FacebookLoginBtn = styled.button`
  & > button {
    background: #3866b8;
    padding: 1em 0.5em;
    color: var(--white);
    font-weight: bold;
    border: none;
  }
`;
