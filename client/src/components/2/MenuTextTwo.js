import React, { useContext } from 'react';
import {Link} from 'react-router-dom';
import classNames from 'classnames';
import MenuContext from 'context/menu-context.js';

const menuValues = [
  {text: 'Menu1', link: '/menus/1'},
  {text: 'Menu2', link: '/menus/2'},
  {text: 'Menu3', link: '/menus/3'},
  {text: 'Menu4', link: '/menus/4'},
  {text: 'Menu5', link: '/menus/5'},
  {text: 'Menu6', link: '/menus/6'},
];

const MenuTextTwo = () => {
  const { handleMenu, menuDisplay } = useContext(MenuContext);
  const menuClassName = classNames(
    'two_menu_panel__links',
    {
      'two_menu_panel__links--display': menuDisplay
    }
  );

  return(
    <div className = {menuClassName}>
      {menuValues.map((value, index)=>(
        <div key={index} className="two_menu_panel__sect">
          <Link
            to={value.link}
            className = 'two_menu_panel__link'
            onClick = {() => handleMenu()}
          >
            {value.text}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default MenuTextTwo;