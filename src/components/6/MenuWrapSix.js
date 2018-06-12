import React from "react";
import MenuButtonSix from './MenuButtonSix';
import MenuPanelSix from './MenuPanelSix';
import MenuTextFour from './MenuTextFour';

class MenuWrapSix extends React.Component{
  render(){
	  return(
			<div>
        <MenuButtonSix />
        <MenuPanelSix />
        <MenuTextFour/>
			</div>
	  );
  }
}

export default MenuWrapSix;