import React from "react";
import classNames from 'classnames';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as menuActions from '../actions/menu';

class MenuButtonOne extends React.Component{
	toggleMenu = () => {
    this.props.menuActions.toggleMenu(!this.props.menuDisplay);
  }
  render(){
    const {
      menuDisplay,
    } = this.props;

    const menuLine1Names= classNames(
      'two_menu_line1',
      {
        'two_menu_line1--display':menuDisplay,
      }
    );
    const menuLine2Names= classNames(
      'two_menu_line2',
      {
        'two_menu_line2--display':menuDisplay,
      }
    );
    const menuLine3Names= classNames(
      'two_menu_line3',
      {
        'two_menu_line3--display':menuDisplay,
      }
    );
	  return(
      <div
        onClick = {this.toggleMenu}
        className = 'two_menu_btn'
      >
        <div
          className = 'two_menu_btn__container'
        >
          <span
            className = {menuLine1Names}
          >
          </span>
          <span
            className = {menuLine2Names}
          >
          </span>
          <span
            className = {menuLine3Names}
          >
          </span>
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
)(MenuButtonOne);