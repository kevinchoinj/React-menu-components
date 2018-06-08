import React from "react";
import MenuButtonEight from './MenuButtonEight';
import MenuPanelEight from './MenuPanelEight';

class MenuWrapEight extends React.Component{
  render(){
	  return(
			<div>
        <MenuButtonEight />
        <MenuPanelEight />
			</div>
	  );
  }
}

export default MenuWrapEight;