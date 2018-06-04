export const TOGGLE_MENU = Symbol('TOGGLE_MENU');

export const toggleMenu = (menuDisplay) =>{
  return{
    type: TOGGLE_MENU,
    menuDisplay
  };
}

