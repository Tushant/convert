import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const
  Wrapper = styled.a`
    font-size: 13px;
    color: #797979;
    display: flex;
    align-items: center;
    flex-direction: column;
    text-align: center;
    & > figure {
      background: #FFFFFF;
      border: 1px solid #DEDEDE;
      box-sizing: border-box;
      border-radius: 4px;
      width: 40px;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0 0 5px;
      transition-property: border-color;
      & > img {
        width: 20px;
      }
    }
    &:hover {
      & > figure {
        border-color: #2184DC;
      }
    }
    &.listing {
      align-items: center;
      flex-direction: row;
      font-size: 20px;
      & > figure {
        border: none;
        margin: 0 30px 0 0;
        & > img {
          max-width: auto;
          width: 30px;
        }
      }
    }
  `;

const
  Item = ({ item, viewStyleClass }) => {
    return <Wrapper href={item.anchor || ''} className={viewStyleClass}>
      {item.icon && <figure>
        <img src={item.icon} alt="" />
      </figure>}
      {item.label || 'N/A'}
    </Wrapper>;
  };

Item.propTypes = {
  item          : PropTypes.object,
  viewStyleClass: PropTypes.string
};

export default Item;
