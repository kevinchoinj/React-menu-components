import React from 'react';
import {connect} from 'react-redux';
import classNames from 'classnames';
import MenuText from './MenuText';

class MenuPanel extends React.Component{
  render(){
    const {
      menuDisplay,
    } = this.props;

    const menuClassName = classNames(
      'eleven_menu_panel',
      {
        'eleven_menu_panel--display':menuDisplay,
        'eleven_menu_panel--hidden':menuDisplay===false,
      }
    );

    return(
      <div>
        <div className = {menuClassName}>
          <MenuText />
        </div>
      </div>
    );
  }
}

export default connect(
  (state, ownProps) => ({
    menuDisplay:state.menu.menuDisplay,
  }),
  dispatch => ({
  }),
)(MenuPanel);
