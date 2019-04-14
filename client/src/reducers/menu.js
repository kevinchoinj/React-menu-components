import {
  TOGGLE_MENU,
  SET_PAGE_NAME,
  TOGGLE_MAIN_MENU,
  HOVER_MENU_OPTION,
  FIRST_MENU_CLICK,
} from '../actions/menu';

const DEFAULT_STATE={
  menuDisplay: null,
  currentPage: '',
  mainMenuDisplay: false,
  hoverOption: null,
  firstMenuClicked: false,
};

export default(state=DEFAULT_STATE, payload)=>
{
  switch(payload.type){
  case TOGGLE_MENU:
    return state = {...state, menuDisplay:payload.menuDisplay};
  case SET_PAGE_NAME:
    return state = {...state, currentPage: payload.currentPage};
  case TOGGLE_MAIN_MENU:
    return state = {...state, mainMenuDisplay:payload.mainMenuDisplay};
  case HOVER_MENU_OPTION:
    return state = {...state, hoverOption:payload.hoverOption};
  case FIRST_MENU_CLICK:
    return state = {...state, firstMenuClicked:payload.firstMenuClicked};
  default:
    return state;
  }
};


