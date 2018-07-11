import React from "react";
import MenuButton from './ScrolledMenuButton';
import MenuPanel from './ScrolledMenuPanel';
import MenuText from './ScrolledMenuText';

class MenuWrap extends React.Component{
  render(){
	  return(
			<div>
        <MenuButton />
        <MenuPanel />
        <MenuText/>
			</div>
	  );
  }
}

export default MenuWrap;