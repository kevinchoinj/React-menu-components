import React from 'react';
import {connect} from 'react-redux';
import classNames from 'classnames';

class MenuPanelSix extends React.Component{
  render(){
    const {
      menuDisplay,
    } = this.props;

    const menuClassName = classNames(
      'six_menu_panel',
      {
        'six_menu_panel--display':menuDisplay
      }
    );

    return(
      <div className = {menuClassName}>
        <li className="six_menu_block"/>
        <li className="six_menu_block"/>
        <li className="six_menu_block"/>
        <li className="six_menu_block"/>

        <li className="six_menu_block__other"/>
        <li className="six_menu_block__other"/>
        <li className="six_menu_block__other"/>
        <li className="six_menu_block__other"/>

        <li className="six_menu_block"/>
        <li className="six_menu_block"/>
        <li className="six_menu_block"/>
        <li className="six_menu_block"/>
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
)(MenuPanelSix);
