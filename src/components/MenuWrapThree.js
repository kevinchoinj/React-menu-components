import React from "react";
import MenuButtonThree from './MenuButtonThree.js';
import MenuPanelThree from './MenuPanelThree.js';
import MenuBarThree from './MenuBarThree.js';

export default class MenuWrapThree extends React.Component{
  render(){
	  return(
			<div>
				<MenuBarThree/>
				<MenuButtonThree/>
				<MenuPanelThree/>
			</div>
	  );
  }
}
