import React, { useContext } from 'react';
import {Link} from 'react-router-dom';
import classNames from 'classnames';
import MenuContext from 'context/menu-context.js';

const menuValues = [
  {text: 'Menu1', link: '/menus/1'},
  {text: 'Menu2', link: '/menus/2'},
  {text: 'Menu3', link: '/menus/3'},
];

const MenuTextOne = () => {
  const { handleMenu, menuDisplay } = useContext(MenuContext);
  const menuClassName = classNames(
    'one_menu_panel__links',
    {
      'one_menu_panel__links--display': menuDisplay
    }
  );
  return(
    <div className = {menuClassName}>
      {menuValues.map((value, index)=>(
        <div key={index}>
          <Link
            to={value.link}
            className = 'one_menu_panel__link'
            onClick = {() => handleMenu()}
          >
            {value.text}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default MenuTextOne;