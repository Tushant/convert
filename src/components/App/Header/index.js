import React from 'react';

import styled from 'styled-components';

const
  HeaderWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 10;
  `,
  Wrapper = styled.div`
    height: 48px;
	  background-color: #5a66a6;
	  position: relative;
	  z-index: 5;
  `,
  Container = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 1170px;
    min-width: 885px;
    padding: 0 20px;
    height: 100%;
    margin-left: auto;
    margin-right: auto;
    background-color: #5a66a6;
  `,
  Logo = styled.div`
    flex-shrink: 0;
    width: 22px;
    height: 22px;
  `;

  const
    Header = () => {
      return <HeaderWrapper>
        <Wrapper>
          <Container>
            <Logo />
          </Container>
        </Wrapper>
      </HeaderWrapper>;
    };

  export default Header;
