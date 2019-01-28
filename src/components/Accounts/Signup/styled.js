import styled from 'styled-components';
import { Link } from 'react-router-dom';

import BackgroundImage from './images/watermark-background.jpg';

export const SignupForm = styled.div`
  width: 100%;
  min-height: 100vh;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background: #f2f2f2;
`;

export const SignupWrapper = styled.div`
  width: 100%;
  background: linear-gradient(rgba(48, 56, 117, 0.85), rgba(48, 56, 117, 0.85)), url(${BackgroundImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  overflow: hidden;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  flex-direction: row-reverse;
`;

export const LeftBlock = styled.div`
  width: calc(100% - 560px);
  z-index: 1;
  &::before {
    content: '';
    display: block;
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.1);
  }
`;

export const RightBlock = styled.div`
  width: 50%;
  min-height: 100vh;
  display: flex;
  background-color: #f7f7f7;
  padding: 0;
  position: relative;
`;

export const Form = styled.form`
  background: var(--white);
  box-shadow: 0 1.5px 0 0 rgba(0, 0, 0, 0.1);
  position: absolute;
  top: 120px;
  left: 0;
  max-width: 450px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  z-index: 99;
  right: 0;
  margin: auto;
  width: 75%;
`;

export const StyledLogo = styled(Link)`
  margin: 10px auto;
`

export const Caption = styled.span`
  width: 100%;
  display: flex;
  font-size: 30px;
  color: var(--primary);
  line-height: 1.2;
  text-align: center;
  padding: 20px;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const FormField = styled.div`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin-bottom: 2rem;
`;


export const Label = styled.label`
  color: var(--grey);
`;

export const StyledButton = styled.button`
  padding: 10px 40px;
  font-size: 20px;
  margin: 10px 0;
  font-weight: 400;
`;

export const StyledNote = styled.p`
  color: var(--primary);
`

export const StyledLink = styled(Link)`
  text-decoration: none;
`
