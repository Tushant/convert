import { SELECT_IMAGE } from './types';

export default function selectImage(image) {
  return {
    type: SELECT_IMAGE,
    payload: image
  }
}
