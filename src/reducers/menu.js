import {
  TOGGLE_MENU,
  SET_PAGE_NAME,
  TOGGLE_MAIN_MENU,
} from '../actions/menu'

const DEFAULT_STATE={
  menuDisplay: false,
  currentPage: '',
  mainMenuDisplay: false,
}

export default(state=DEFAULT_STATE, payload)=>
{
  switch(payload.type){
    case TOGGLE_MENU:
      return state = {...state, menuDisplay:payload.menuDisplay};
    case SET_PAGE_NAME:
      return state = {...state, currentPage: payload.currentPage};
    case TOGGLE_MAIN_MENU:
      return state = {...state, mainMenuDisplay:payload.mainMenuDisplay};
      default:
      return state;
  }
};
