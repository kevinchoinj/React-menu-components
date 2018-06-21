import React from "react";
import MenuButton from './MenuButton';
import MenuPanel from './MenuPanel';

class MenuWrap extends React.Component{
  render(){
	  return(
			<div>
        <MenuButton />
        <MenuPanel />
			</div>
	  );
  }
}

export default MenuWrap;