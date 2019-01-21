import React from "react";
import { connect } from 'react-redux';
import styled from "styled-components";

import { SELECT_IMAGE } from "actions/types";
import { selectImage } from "actions";
import imagesReducer from "reducers/images";
import images from "./list";

const Wrapper = styled.div`
  height: calc(100vh - 160px);
  flex: 1;
  overflow-y: scroll;
`;

const Image = styled.img`
  display: flex;
  flex: 1;
  width: 100%;
  max-width: 100%;
  margin: 20px 0;
  cursor: pointer;
`;

const Images = props => {
  // const [_, dispatch] = React.useReducer(imagesReducer, []);
  return (
    <React.Fragment>
      <Wrapper>
        {images.map(image => (
          <Image
            key={image.id}
            src={image.image}
            alt={image.category}
            onClick={() => props.selectImage(image)}
          />
        ))}
      </Wrapper>
    </React.Fragment>
  );
};

export default connect(null, dispatch => ({ selectImage: image => dispatch(selectImage(image))}))(Images);
// export default Images;
// onClick={() => dispatch({ type: SELECT_IMAGE, payload: image })}
