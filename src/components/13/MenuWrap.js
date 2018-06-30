import React from "react";
import MenuButtonEight from './MenuButton';
import MenuPanelEight from './MenuPanel';

class MenuWrap extends React.Component{
  render(){
	  return(
			<div>
        <MenuButtonEight />
        <MenuPanelEight />
			</div>
	  );
  }
}

export default MenuWrap;