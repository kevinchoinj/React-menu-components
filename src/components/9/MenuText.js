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
      <div className = {menuClassName}>
        <div className="nine_menu_panel__container">
        <Link
          to='/menus/9/1'
          className = 'nine_menu_panel__link'
          onClick = {this.toggleMenu}
        >
          <div className = 'nine_menu_panel__link_div' onMouseEnter={()=>this.hoverOption(1)}>
            <div className="nine_number">01</div>
              <div className="nine_menu_panel__link_title">
                Sample1
              </div>
          </div>
        </Link>
        </div>

        <div className="nine_menu_panel__container">
        <Link
          to='/menus/9/2'
          className = 'nine_menu_panel__link'
          onClick = {this.toggleMenu}
        >
          <div className = 'nine_menu_panel__link_div' onMouseEnter={()=>this.hoverOption(2)}>
            <div className="nine_number">02</div>
            <div className="nine_menu_panel__link_title">
              Sample2
            </div>
          </div>
        </Link>
        </div>

        <div className="nine_menu_panel__container">
        <Link
          to='/menus/9/3'
          className = 'nine_menu_panel__link'
          onClick = {this.toggleMenu}
        >
          <div className = 'nine_menu_panel__link_div' onMouseEnter={()=>this.hoverOption(3)}>
            <div className="nine_number">03</div>
            <div className="nine_menu_panel__link_title">
              Sample3
            </div>
          </div>
        </Link>
        </div>

        <div className="nine_menu_panel__container">
        <Link
          to='/menus/3'
          className = 'nine_menu_panel__link'
          onClick = {this.toggleMenu}
        >
          <div className = 'nine_menu_panel__link_div' onMouseEnter={()=>this.hoverOption(4)}>
            <div className="nine_number">04</div>
            <div className="nine_menu_panel__link_title">
              Menu3
            </div>
          </div>
        </Link>
        </div>

        <div className="nine_menu_panel__container">
        <Link
          to='/menus/4'
          className = 'nine_menu_panel__link'
          onClick = {this.toggleMenu}
        >
          <div className = 'nine_menu_panel__link_div' onMouseEnter={()=>this.hoverOption(5)}>
            <div className="nine_number">05</div>
            <div className="nine_menu_panel__link_title">
              Menu4
            </div>
          </div>
        </Link>
        </div>

        <div className="nine_menu_panel__container">
        <Link
          to='/menus/5'
          className = 'nine_menu_panel__link'
          onClick = {this.toggleMenu}
        >
          <div className = 'nine_menu_panel__link_div' onMouseEnter={()=>this.hoverOption(6)}>
            <div className="nine_number">06</div>
            <div className="nine_menu_panel__link_title">
              Menu5
            </div>
          </div>
        </Link>
        </div>

        <div className="nine_menu_panel__container">
        <Link
          to='/menus/6'
          className = 'nine_menu_panel__link'
          onClick = {this.toggleMenu}
        >
          <div className = 'nine_menu_panel__link_div' onMouseEnter={()=>this.hoverOption(7)}>
            <div className="nine_number">07</div>
            <div className="nine_menu_panel__link_title">
              Menu6
            </div>
          </div>
        </Link>
        </div>

        <div className="nine_menu_panel__container">
        <Link
          to='/menus/6'
          className = 'nine_menu_panel__link'
          onClick = {this.toggleMenu}
        >
          <div className = 'nine_menu_panel__link_div' onMouseEnter={()=>this.hoverOption(8)}>
            <div className="nine_number">08</div>
            <div className="nine_menu_panel__link_title">
              Menu7
            </div>
          </div>
        </Link>
        </div>

        <div className="nine_menu_panel__container">
        <Link
          to='/menus/6'
          className = 'nine_menu_panel__link'
          onClick = {this.toggleMenu}
        >
          <div className = 'nine_menu_panel__link_div' onMouseEnter={()=>this.hoverOption(9)}>
            <div className="nine_number">09</div>
            <div className="nine_menu_panel__link_title">
              Menu8
            </div>
          </div>
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
