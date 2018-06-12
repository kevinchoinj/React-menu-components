import React from "react";
import MenuButton from './MenuButton';
import MenuPanel from './MenuPanel';

class MenuWrap extends React.Component{
  render(){
	  return(
			<div className="nine_menu_wrapper">
        <MenuButton />
        <MenuPanel />
			</div>
	  );
  }
}

export default MenuWrap;