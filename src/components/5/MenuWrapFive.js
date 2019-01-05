import React from 'react';
import MenuButtonFive from './MenuButtonFive';
import MenuPanelFive from './MenuPanelFive';
import MenuTextFour from './MenuTextFour';

class MenuWrapFive extends React.Component{
  render(){
    return(
      <div>
        <MenuButtonFive />
        <MenuPanelFive />
        <MenuTextFour/>
      </div>
    );
  }
}

export default MenuWrapFive;