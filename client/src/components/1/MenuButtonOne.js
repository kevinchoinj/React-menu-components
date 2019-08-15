import React, { useContext } from 'react';
import {MenuContext} from 'context/MenuContext.js';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  position: fixed;
  mix-blend-mode:  difference;
  top: 0px;
  right: 10px;
  width: 60px;
  height: 70px;
  cursor: pointer;
  will-change: opacity;
  transition: .2s ease;
  z-index: 5;
`;
const StyledContainer = styled.div`
  background: transparent;
  color: #000;
`;
const StyledLine = styled.span`
  background-color: #fff;
  height: 3px;
  position: absolute;
  left: 18px;
  transition:.25s ease-out;
  transform: rotate(0deg);
  &:nth-child(1) {
    width: 24px;
    top: 29px;
    transform: ${props => props.menuDisplay && 'translateY(5px) rotate(45deg)'};
  }
  &:nth-child(2) {
    width: 24px;
    top: 38px;
    transform: ${props => props.menuDisplay && 'translateY(-4px) rotate(-45deg)'};
  }
  &:nth-child(3) {
    width: 14px;
    top: 47px;
    transform: ${props => props.menuDisplay && 'scale(0, 1)'};
  }
`;

const MenuButton = () => {
  const { state, dispatch } = useContext(MenuContext);

  const handleToggle = () => {
    dispatch({
      type: 'TOGGLE_MENU', 
      payload: !state.menuDisplay
    });
  };
  return(
    <StyledWrapper 
      menuDisplay={state.menuDisplay}
      onClick = {() => handleToggle()}
    >
      <StyledContainer>
        <StyledLine menuDisplay={state.menuDisplay}/>
        <StyledLine menuDisplay={state.menuDisplay}/>
        <StyledLine menuDisplay={state.menuDisplay}/>
      </StyledContainer>
    </StyledWrapper>
  );
};
export default MenuButton;