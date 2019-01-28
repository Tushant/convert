import styled from 'styled-components';

export const Profile = styled.div`
  width: 100%;
  ${'' /* min-height: 100vh; */};
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  padding: 20px;
`;

export const ProfileWrapper = styled.div`
  display: flex;
  flex: 1;
  padding: 40px;
  background: var(--white);
  box-shadow: 0 1.5px 0 0 rgba(0, 0, 0, 0.1);
`;

export const Caption = styled.div`
  color: var(--mildGrey);
  margin-bottom: 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  &:after:not(:first-child) {
    content: '';
    display: block;
    width: 100%;
    border: solid 1px var(--lightGrey);
    margin: 10px 0;
  }
`;

export const ProfileImage = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  border-right: solid 1px var(--lightGrey);
  ${'' /* justify-content: center;
  align-items: center; */} text-align: center;
  align-items: center;
`;

export const Avatar = styled.img`
  border-radius: 50%;
  width: 120px;
  height: 120px;
  margin: 10px auto;
`;

export const Username = styled.p`
  font-size: 16px;
  font-weight: bold;
`;

export const Upload = styled.button`
  border-radius: 15px;
  background: var(--primary);
  padding: 16px;
  margin-top: 15px;
`;

export const Slogan = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  &:before {
    content: '';
    display: block;
    width: 100%;
    border: solid 1px var(--lightGrey);
    margin: 40px 0 20px -21px;
  }
`;

export const SloganTitle = styled.p`
  font-size: 16px;
  color: var(--mildGrey);
`;
export const SloganText = styled.div`
  font-size: 14px;
  color: var(--mildGrey);
`;

export const ProfilePersonal = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  border-right: solid 1px var(--lightGrey);
`;

export const Form = styled.form`
  display: flex;
  flex-direction: ${props => (props.column ? 'column' : 'row')};
`;

export const FormField = styled.div`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin-bottom: 2rem;
  flex-direction: column;
  width: 100%;
`;

export const Label = styled.label`
  flex: 1;
  margin: 10px 0;
  color: var(--primary);
`;

export const ProfileExternal = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;
