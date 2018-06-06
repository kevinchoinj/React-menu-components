import React from "react";
import MenuButtonFour from './MenuButtonFour';
import MenuPanelFour from './MenuPanelFour';

class MenuWrapFour extends React.Component{
  render(){
	  return(
			<div>
        <MenuButtonFour />
        <MenuPanelFour />
			</div>
	  );
  }
}

export default MenuWrapFour;