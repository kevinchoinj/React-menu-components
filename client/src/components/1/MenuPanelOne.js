import React, { useContext } from 'react';
import {MenuContext} from 'context/MenuContext.js';
import styled from 'styled-components';

const StyledPanel = styled.div`
  height: 150vh;
  width: 150vw;
  position: fixed;
  right: -150vw;
  top: -150vh;
  transform: rotate(45deg);
  background-color: #000;
  transition: .8s ease-out;
  z-index: 3;
  transform: ${props => props.menuDisplay && 'translateX(-158vw) translateY(158vh) rotate(45deg)'};
  @media screen and (max-width: 992px) {
    height: 100vh;
    width: 100vw;
    top: 0;
    right: -100vw;
    transition: .4s ease-out;
    transform: ${props => props.menuDisplay ? 'translateX(-100vw)' : 'rotate(0deg)'};
  }
`;

const MenuPanelOne = () => {
  const { state } = useContext(MenuContext);
  return(
    <StyledPanel
      menuDisplay={state.menuDisplay}
    />
  );
};

export default MenuPanelOne;