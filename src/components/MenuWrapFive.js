import React from "react";
import MenuButtonFive from './MenuButtonFive';
import MenuPanelFive from './MenuPanelFive';

class MenuWrapFive extends React.Component{
  render(){
	  return(
			<div>
        <MenuButtonFive />
        <MenuPanelFive />
			</div>
	  );
  }
}

export default MenuWrapFive;