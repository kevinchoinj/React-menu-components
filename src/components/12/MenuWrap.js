import React from 'react';
import MenuButton from './MenuButton';
import MenuPanel from './MenuPanel';
import MenuText from './MenuText';

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