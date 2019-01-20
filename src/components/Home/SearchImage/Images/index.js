import React from "react";
import styled from "styled-components";

import { SELECT_IMAGE } from "actions/types";
import imagesReducer from "reducers/images";
import images from "./list";

const Wrapper = styled.div`
  flex: 1;
`;

const Image = styled.img`
  display: flex;
  flex: 1;
  width: 150px;
  max-width: 100%;
  margin: 20px 0;
  cursor: pointer;
`;

const Images = props => {
  const [_, dispatch] = React.useReducer(imagesReducer, []);
  return (
    <React.Fragment>
      <Wrapper>
        {images.map(image => (
          <Image
            key={image.id}
            src={image.image}
            alt={image.category}
            onClick={() => dispatch({ type: SELECT_IMAGE, payload: image })}
          />
        ))}
      </Wrapper>
    </React.Fragment>
  );
};

export default Images;
