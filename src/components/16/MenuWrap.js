import React from "react";
import MenuButton from './MenuButton';
import MenuPanel from './MenuPanel';
import MenuContent from './MenuContent';
import Motion from './Motion';

class MenuWrap extends React.Component{
  render(){
	  return(
			<div>
        <MenuButton />
        <MenuPanel />
        <Motion/>
        <MenuContent/>
			</div>
	  );
  }
}

export default MenuWrap;