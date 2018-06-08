import React from "react";
import MenuButtonSeven from './MenuButtonSeven';
import MenuPanelSeven from './MenuPanelSeven';
import MenuTextFour from './MenuTextFour';

class MenuWrapSeven extends React.Component{
  render(){
	  return(
			<div>
        <MenuButtonSeven />
        <MenuPanelSeven />
        <MenuTextFour/>
			</div>
	  );
  }
}

export default MenuWrapSeven;