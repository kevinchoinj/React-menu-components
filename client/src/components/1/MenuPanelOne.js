import React, { useContext } from 'react';
import classNames from 'classnames';
import MenuContext from 'context/menu-context.js';

const MenuPanelOne = () => {
  const { menuDisplay } = useContext(MenuContext);
  const menuClassName = classNames(
    'one_menu_panel',
    {
      'one_menu_panel--display':menuDisplay
    }
  );

  return(
    <div className = {menuClassName}>
    </div>
  );
};

export default MenuPanelOne;