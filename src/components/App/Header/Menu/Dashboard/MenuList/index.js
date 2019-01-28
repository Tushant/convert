import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Text } from 'commons/styled';
import Item from './Item';

const
  Wrapper = styled.div`
    margin-bottom: 50px;
  `,
  Title = styled(Text)`
    font-size: 20px;
    color: #666666;
    margin: 0 0 30px 10px;
  `,
  MenuWrapper = styled.div`
    display: grid;
    gap: 24px 16px;
    grid-template-columns: repeat(3, 1fr);
    &.listing {
      grid-template-columns: 1fr;
    }
  `;

const
  MenuList = ({ items, title, viewStyleClass }) => {
    return <Wrapper>
      <Title>{title}</Title>
      <MenuWrapper className={viewStyleClass}>
        {items.length && items.map((item, index) => <Item item={item} index={index} viewStyleClass={viewStyleClass} />)}
      </MenuWrapper>
    </Wrapper>;
  };

MenuList.propTypes = {
  items         : PropTypes.array,
  title         : PropTypes.string,
  viewStyleClass: PropTypes.string
};

export default MenuList;
