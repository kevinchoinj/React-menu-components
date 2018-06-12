import React from 'react';
import {Link} from 'react-router-dom';
import * as menuActions from '../../actions/menu';
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
      'one_menu_panel__links',
      {
        'one_menu_panel__links--display': menuDisplay
      }
    );

    return(
      <div
        className = {menuClassName}
      >
        <Link
          to='/'
          className = 'one_menu_panel__link'
          onClick = {this.toggleMenu}
        >
          Home
        </Link>
        <br/>
        <Link
          to='/menus/1'
          className = 'one_menu_panel__link'
          onClick = {this.toggleMenu}
        >
          Menu one
        </Link>
        <br/>
        <Link
          to='/menus/2'
          className = 'one_menu_panel__link'
          onClick = {this.toggleMenu}
        >
          Menu two
        </Link>
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
