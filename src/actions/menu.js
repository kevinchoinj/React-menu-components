export const TOGGLE_MENU = Symbol('TOGGLE_MENU');
export const TOGGLE_MAIN_MENU = Symbol('TOGGLE_MAIN_MENU');
export const SET_PAGE_NAME = Symbol('SET_PAGE_NAME');
export const HOVER_MENU_OPTION = Symbol('HOVER_MENU_OPTION');

export const toggleMenu = (menuDisplay) => {
  return{
    type: TOGGLE_MENU,
    menuDisplay
  };
}
export const triggerToggle = (menuDisplay) => {
  return{
    type: TOGGLE_MENU,
    menuDisplay
  };
}
export const setPageName = (currentPage) =>{
  return{
    type: SET_PAGE_NAME,
    currentPage,
  };
}

export const toggleMainMenu = (mainMenuDisplay) =>{
  return{
    type: TOGGLE_MAIN_MENU,
    mainMenuDisplay
  };
}

export const hoverMenuOption = (hoverOption) =>{
  return{
    type: HOVER_MENU_OPTION,
    hoverOption
  };
}
