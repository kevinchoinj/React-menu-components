import React from "react";
import classNames from 'classnames';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as menuActions from '../../actions/menu';
import debounce from 'debounce';

class MenuButtonSeven extends React.Component{
  constructor(props) {
    super(props);
    this.toggleMenu = debounce(this.toggleMenu.bind(this), 350);
  }
	toggleMenu() {
    this.props.menuActions.toggleMenu(!this.props.menuDisplay);
  }
  render(){
    const {
      menuDisplay,
    } = this.props;

    const menuLine1Names= classNames(
      'seven_menu_line1',
      {
        'seven_menu_line1--display':menuDisplay,
      }
    );
    const menuLine2Names= classNames(
      'seven_menu_line2',
      {
        'seven_menu_line2--display':menuDisplay,
      }
    );
    const menuLine3Names= classNames(
      'seven_menu_line3',
      {
        'seven_menu_line3--display':menuDisplay,
      }
    );
	  return(
      <div
        onClick = {this.toggleMenu}
        className = 'seven_menu_btn'
      >
        <div
          className = 'seven_menu_btn__container'
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
)(MenuButtonSeven);