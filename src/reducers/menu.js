import {
  TOGGLE_MENU,
  SET_PAGE_NAME,
} from '../actions/menu'

const DEFAULT_STATE={
  menuDisplay:false,
  currentPage: '',
}

export default(state=DEFAULT_STATE, payload)=>
{
  switch(payload.type){
    case TOGGLE_MENU:
      return state = {...state, menuDisplay:payload.menuDisplay};
    case SET_PAGE_NAME:
      return state = {...state, currentPage: payload.currentPage};
    default:
      return state;
  }
};
