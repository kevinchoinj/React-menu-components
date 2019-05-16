import React, { useContext } from 'react';
import classNames from 'classnames';
import MenuContext from 'context/menu-context.js';
import MenuTextTwo from './MenuTextTwo';

const MenuPanelOne = () => {
  const { menuDisplay } = useContext(MenuContext);
  const menuClassName = classNames(
    'two_menu_panel',
    {
      'two_menu_panel--display':menuDisplay
    }
  );

  return(
    <div className = {menuClassName}>
      <MenuTextTwo/>
    </div>
  );
};

export default MenuPanelOne;