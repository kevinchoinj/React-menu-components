import React, { useContext } from 'react';
import {Link} from 'react-router-dom';
import {MenuContext} from 'context/MenuContext.js';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  position: fixed;
  bottom: 80px;
  left: 25px;
  transition: .8s ease-out;
  z-index: 4;
  opacity: ${props => props.menuDisplay ? 1 : 0};
  pointer-events: ${props => props.menuDisplay ? 'auto' : 'none'};
  a {
    text-decoration: none;
    color: #fff;
    font-weight: bold;
    font-size: 3rem;
    transition: .2s ease-out;
    &:hover, &:focus {
      color: #444;
      text-decoration: none;
    }
  }
`;
const menuValues = [
  {text: 'Menu1', link: '/menus/1'},
  {text: 'Menu2', link: '/menus/2'},
  {text: 'Menu3', link: '/menus/3'},
];

const MenuTextOne = () => {
  const { state, dispatch } = useContext(MenuContext);

  const handleToggle = () => {
    dispatch({
      type: 'TOGGLE_MENU', 
      payload: !state.menuDisplay
    });
  };

  return(
    <StyledWrapper menuDisplay={state.menuDisplay}>
      {menuValues.map((value)=>(
        <div key={value.link}>
          <Link
            to={value.link}
            onClick = {() => handleToggle()}
          >
            {value.text}
          </Link>
        </div>
      ))}
    </StyledWrapper>
  );
};

export default MenuTextOne;