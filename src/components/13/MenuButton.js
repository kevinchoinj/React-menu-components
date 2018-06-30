import React from "react";
import classNames from 'classnames';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as menuActions from '../../actions/menu';

class MenuButtonEight extends React.Component{
	toggleMenu = () => {
    this.props.menuActions.toggleMenu(!this.props.menuDisplay);
  }
  render(){
    const {
      menuDisplay,
    } = this.props;

    const menuLine1Names= classNames(
      'thirteen_menu_line1',
      {
        'thirteen_menu_line1--display':menuDisplay,
      }
    );
    const menuLine2Names= classNames(
      'thirteen_menu_line2',
      {
        'thirteen_menu_line2--display':menuDisplay,
      }
    );
    const menuLine3Names= classNames(
      'thirteen_menu_line3',
      {
        'thirteen_menu_line3--display':menuDisplay,
      }
    );
	  return(
      <div
        onClick = {this.toggleMenu}
        className = 'thirteen_menu_btn'
      >
        <div
          className = 'thirteen_menu_btn__container'
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
)(MenuButtonEight);