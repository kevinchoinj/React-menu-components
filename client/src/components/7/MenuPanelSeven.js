import React from 'react';
import {connect} from 'react-redux';
import classNames from 'classnames';

class MenuPanelSeven extends React.Component{
  render(){
    const {
      menuDisplay,
    } = this.props;

    const menuClassName = classNames(
      'seven_menu_panel',
      {
        'seven_menu_panel--display': menuDisplay,
        'seven_menu_panel--hidden': menuDisplay===false,
      }
    );

    return(
      <div className = {menuClassName}>
        <li className="seven_menu_block"/>
        <li className="seven_menu_block"/>
        <li className="seven_menu_block"/>
        <li className="seven_menu_block"/>
        <li className="seven_menu_block"/>

        <li className="seven_menu_block"/>
        <li className="seven_menu_block"/>
        <li className="seven_menu_block"/>
        <li className="seven_menu_block"/>
        <li className="seven_menu_block"/>

        <li className="seven_menu_block"/>
        <li className="seven_menu_block"/>
        <li className="seven_menu_block"/>
        <li className="seven_menu_block"/>
        <li className="seven_menu_block"/>

        <li className="seven_menu_block"/>
        <li className="seven_menu_block"/>
        <li className="seven_menu_block"/>
        <li className="seven_menu_block"/>
        <li className="seven_menu_block"/>
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
)(MenuPanelSeven);
