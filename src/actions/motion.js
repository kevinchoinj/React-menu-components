export const SET_CURRENT_PHOTO = Symbol('SET_CURRENT_PHOTO');

export const setCurrentPhoto = (currentPhoto) => {
  return{
    type: SET_CURRENT_PHOTO,
    currentPhoto,
  };
};