import {
  SET_CURRENT_PHOTO,
} from '../actions/motion';

const DEFAULT_STATE={
  currentPhoto: 0,
};

export default(state=DEFAULT_STATE, payload)=> {
  switch(payload.type){
  case SET_CURRENT_PHOTO:
    return state = {
      ...state,
      currentPhoto: payload.currentPhoto
    };

  default:
    return state;
  }
};
