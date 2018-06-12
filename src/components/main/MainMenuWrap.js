import React from "react";
import MainMenuButton from './MainMenuButton.js';
import MainMenuPanel from './MainMenuPanel.js';

export default class MainMenuWrap extends React.Component{
  render(){
	  return(
			<div>
				<MainMenuButton/>
				<MainMenuPanel/>
			</div>
	  );
  }
}
