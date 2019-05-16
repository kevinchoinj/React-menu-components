import React, { useContext } from 'react';
import classNames from 'classnames';
import MenuContext from 'context/menu-context.js';

const MenuButton = () => {
  const { handleMenu, menuDisplay } = useContext(MenuContext);

  const buttonName = classNames({
    'one_menu_button__container': true,
    'one_menu_button__container--displayed': menuDisplay,
  });

  return(
    <div
      onClick = {() => handleMenu()}
      className = "one_menu_button"
    >
      <div className = {buttonName}>
        <span className = "one_menu_button__line"/>
        <span className = "one_menu_button__line"/>
        <span className = "one_menu_button__line"/>
      </div>
    </div>
  );
};
export default MenuButton;