import React from 'react';
import {Link} from 'react-router-dom';
import * as menuActions from '../../actions/menu';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import classNames from 'classnames';

class MenuText extends React.Component{
  toggleMenu = () => {
    this.props.menuActions.toggleMenu(false);
  }
  hoverOption = (option) => {
    this.props.menuActions.hoverMenuOption(option);
  }
  render(){
    const {
      menuDisplay,
    } = this.props;
    const menuClassName = classNames(
      'nine_menu_panel__links',
      {
        'nine_menu_panel__links--display': menuDisplay,
      }
    );

    return(
      <div
        className = {menuClassName}
      >
          <div className = 'nine_menu_panel__link_div' onMouseEnter={()=>this.hoverOption(1)}>
            <Link
              to='/menus/9/1'
              className = 'nine_menu_panel__link'
              onClick = {this.toggleMenu}
            >
              Sample1
            </Link>
          </div>

          <div className = 'nine_menu_panel__link_div' onMouseEnter={()=>this.hoverOption(2)}>
            <Link
              to='/menus/9/2'
              className = 'nine_menu_panel__link'
              onClick = {this.toggleMenu}
            >
              Sample2
            </Link>
          </div>

          <div className = 'nine_menu_panel__link_div' onMouseEnter={()=>this.hoverOption(3)}>
            <Link
              to='/menus/9/3'
              className = 'nine_menu_panel__link'
              onClick = {this.toggleMenu}
            >
              Sample3
            </Link>
          </div>

          <div className = 'nine_menu_panel__link_div' onMouseEnter={()=>this.hoverOption(4)}>
            <Link
              to='/menus/3'
              className = 'nine_menu_panel__link'
              onClick = {this.toggleMenu}
            >
              Three
            </Link>
          </div>

          <div className = 'nine_menu_panel__link_div' onMouseEnter={()=>this.hoverOption(5)}>
            <Link
              to='/menus/4'
              className = 'nine_menu_panel__link'
              onClick = {this.toggleMenu}
            >
              Four
            </Link>
          </div>

          <div className = 'nine_menu_panel__link_div' onMouseEnter={()=>this.hoverOption(6)}>
            <Link
              to='/menus/5'
              className = 'nine_menu_panel__link'
              onClick = {this.toggleMenu}
            >
              Five
            </Link>
          </div>

          <div className = 'nine_menu_panel__link_div' onMouseEnter={()=>this.hoverOption(7)}>
            <Link
              to='/menus/6'
              className = 'nine_menu_panel__link'
              onClick = {this.toggleMenu}
            >
              Six
            </Link>
          </div>

          <div className = 'nine_menu_panel__link_div' onMouseEnter={()=>this.hoverOption(8)}>
            <Link
              to='/menus/6'
              className = 'nine_menu_panel__link'
              onClick = {this.toggleMenu}
            >
              Seven
            </Link>
          </div>

                    <div className = 'nine_menu_panel__link_div' onMouseEnter={()=>this.hoverOption(9)}>
            <Link
              to='/menus/6'
              className = 'nine_menu_panel__link'
              onClick = {this.toggleMenu}
            >
              Eight
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
)(MenuText);
