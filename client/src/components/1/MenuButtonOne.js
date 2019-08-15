import React, { useContext } from 'react';
import classNames from 'classnames';
import {MenuContext} from 'context/MenuContext.js';
import styled from 'styled-components';

const MenuButton = () => {
  const { state, dispatch } = useContext(MenuContext);

  const handleToggle = () => {
    dispatch({
      type: 'TOGGLE_MENU', 
      payload: !state.menuDisplay
    });
  };

  const buttonName = classNames({
    'one_menu_button__container': true,
    'one_menu_button__container--displayed': state.menuDisplay,
  });

  return(
    <div
      onClick = {() => handleToggle()}
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