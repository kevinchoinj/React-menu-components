export const TOGGLE_MENU = Symbol('TOGGLE_MENU');
export const SET_PAGE_NAME = Symbol('SET_PAGE_NAME');

export const toggleMenu = (menuDisplay) =>{
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

