import React from "react";
import MenuButtonOne from './MenuButtonOne';
import MenuPanelOne from './MenuPanelOne';
import MenuTextOne from './MenuTextOne';

class MenuWrapOne extends React.Component{
  render(){
	  return(
			<div>
        <MenuButtonOne />
        <MenuPanelOne />
        <MenuTextOne />
			</div>
	  );
  }
}

export default MenuWrapOne;