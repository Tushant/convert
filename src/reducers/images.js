import { SELECT_IMAGE } from 'actions/types';

const initialState = {
  selectedImage: require('assets/images/image1.jpg')
};

export default function getSelectedImage(state = initialState, action) {
  switch (action.type) {
    case SELECT_IMAGE:
      return { ...state, selectedImage: action.payload.image};
    default:
      return state;
  }
}
