export const TOGGLE_NAVBAR_SUBMENU = Symbol('TOGGLE_NAVBAR_SUBMENU');

export const toggleNavbarSubmenu = (key, submenuName) => {
  return{
    type: TOGGLE_NAVBAR_SUBMENU,
    key,
    submenuName,
  };
}