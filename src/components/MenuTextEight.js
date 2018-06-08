import React from 'react';
import {Link} from 'react-router-dom';
import * as menuActions from '../actions/menu';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import classNames from 'classnames';

class MenuTextEight extends React.Component{
  toggleMenu = () => {
    this.props.menuActions.toggleMenu(false);
  }
  render(){
    const {
      menuDisplay,
    } = this.props;
    const menuClassName = classNames(
      'eight_menu_panel__links',
      {
        'eight_menu_panel__links--display': menuDisplay,
      }
    );

    return(
      <div
        className = {menuClassName}
      >
          <div className = 'eight_menu_panel__link_div'>
            <Link
              to='/'
              className = 'eight_menu_panel__link'
              onClick = {this.toggleMenu}
            >
              Home
            </Link>
          </div>

          <div className = 'eight_menu_panel__link_div'>
            <Link
              to='/menus/1'
              className = 'eight_menu_panel__link'
              onClick = {this.toggleMenu}
            >
              Menu one
            </Link>
          </div>

          <div className = 'eight_menu_panel__link_div'>
            <Link
              to='/menus/2'
              className = 'eight_menu_panel__link'
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
)(MenuTextEight);
