import styled from 'styled-components';

import theme from 'constants/theme';

let getFontSize= type => {
  if(!type)return '13px';

  return type === 'large' ? '18px' : '15px';
};

const Text = styled.div `
  font-size: ${props => getFontSize(props.type)};
  color: ${props => props.fade ? theme.color.text.fade : theme.color.text.def};
`;

export default Text;

