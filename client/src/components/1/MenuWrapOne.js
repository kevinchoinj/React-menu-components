import React from 'react';
import MenuButtonOne from './MenuButtonOne';
import MenuPanelOne from './MenuPanelOne';
import MenuTextOne from './MenuTextOne';

class MenuWrapOne extends React.Component{
  render(){
    return(
      <>
        <MenuButtonOne />
        <MenuPanelOne />
        <MenuTextOne />
      </>
    );
  }
}

export default MenuWrapOne;