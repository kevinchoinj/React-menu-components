import React from 'react';
import {Link} from 'react-router-dom';
import * as menuActions from '../actions/menu';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import classNames from 'classnames';

class MenuTextOne extends React.Component{
  toggleMenu = () => {
    this.props.menuActions.toggleMenu(false);
  }
  render(){
    const {
      menuDisplay,
    } = this.props;
    const menuClassName = classNames(
      'two_menu_panel__links',
      {
        'two_menu_panel__links--display': menuDisplay
      }
    );

    return(
      <div
        className = {menuClassName}
      >
      <div className="two_menu_panel__sect">
        <Link
          to='/'
          className = 'two_menu_panel__link'
          onClick = {this.toggleMenu}
        >
          Home
        </Link>
      </div>
      <div className="two_menu_panel__sect">
        <Link
          to='/menus/1'
          className = 'two_menu_panel__link'
          onClick = {this.toggleMenu}
        >
          Menu one
        </Link>
      </div>
      <div className="two_menu_panel__sect">
        <Link
          to='/menus/2'
          className = 'two_menu_panel__link'
          onClick = {this.toggleMenu}
        >
          Menu two
        </Link>
      </div>
      <div className="two_menu_panel__sect">
        <Link
          to='/menus/3'
          className = 'two_menu_panel__link'
          onClick = {this.toggleMenu}
        >
          Menu Three
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
)(MenuTextOne);
