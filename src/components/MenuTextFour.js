import React from 'react';
import {Link} from 'react-router-dom';
import * as menuActions from '../actions/menu';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import classNames from 'classnames';

class MenuTextFour extends React.Component{
  toggleMenu = () => {
    this.props.menuActions.toggleMenu(false);
  }
  render(){
    const {
      menuDisplay,
    } = this.props;
    const menuClassName = classNames(
      'four_menu_panel__links',
      {
        'four_menu_panel__links--display': menuDisplay,
        'four_menu_panel__links--hidden': menuDisplay===false,
      }
    );

    return(
      <div
        className = {menuClassName}
      >
        <div className="four_menu_panel__link_container">
          <div className="four_menu_panel__line"/>
          <Link
            to='/'
            className = 'four_menu_panel__link'
            onClick = {this.toggleMenu}
          >
            Home
          </Link>
        </div>
        <div className="four_menu_panel__link_container">
          <div className="four_menu_panel__line"/>
          <Link
            to='/menus/1'
            className = 'four_menu_panel__link'
            onClick = {this.toggleMenu}
          >
            Menu one
          </Link>
        </div>
        <div className="four_menu_panel__link_container">
          <div className="four_menu_panel__line"/>
          <Link
            to='/menus/2'
            className = 'four_menu_panel__link'
            onClick = {this.toggleMenu}
          >
            Menu two
          </Link>
        </div>
      </div>
    )
  }
}

export default connect(
  (state, ownProps) => ({
    menuDisplay:state.menu.menuDisplay,
  }),
  dispatch => ({
    menuActions: bindActionCreators(menuActions, dispatch),
  }),
)(MenuTextFour);
