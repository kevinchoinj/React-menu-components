import React from 'react';
import {connect} from 'react-redux';
import classNames from 'classnames';

class MenuPanelFive extends React.Component{
  render(){
    const {
      menuDisplay,
    } = this.props;

    const menuClassName = classNames(
      'five_menu_panel',
      {
        'five_menu_panel--display': menuDisplay,
        'five_menu_panel--hidden': menuDisplay===false,
      }
    );

    return(
      <div className = {menuClassName}>
        <li className="five_menu_block"/>
        <li className="five_menu_block"/>
        <li className="five_menu_block"/>
        <li className="five_menu_block"/>

        <li className="five_menu_block"/>
        <li className="five_menu_block"/>
        <li className="five_menu_block"/>
        <li className="five_menu_block"/>

        <li className="five_menu_block"/>
        <li className="five_menu_block"/>
        <li className="five_menu_block"/>
        <li className="five_menu_block"/>
      </div>
    )
  }
}

export default connect(
  (state, ownProps) => ({
    menuDisplay:state.menu.menuDisplay,
  }),
  dispatch => ({
  }),
)(MenuPanelFive);
