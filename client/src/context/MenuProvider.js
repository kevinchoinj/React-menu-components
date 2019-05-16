import React, { useState } from 'react';
import MenuContext from './menu-context';

const MenuProvider = ({ children }) => {

  const handleMenu = () => {
    toggleMenu(prevState => {
      return {
        ...prevState,
        menuDisplay: !prevState.menuDisplay,
      };
    });
  };

  const menuState = {
    menuDisplay: 0,
    handleMenu
  };

  const [menu, toggleMenu] = useState(menuState);

  return (
    <MenuContext.Provider value={menu}>
      {children}
    </MenuContext.Provider>
  );
};

export default MenuProvider;