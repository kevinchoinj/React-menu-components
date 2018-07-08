import React from "react";
import classNames from 'classnames';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as menuActions from '../../actions/menu';

class MenuButton extends React.Component{
	toggleMenu = () => {
    this.props.menuActions.toggleMenu(!this.props.menuDisplay);
  }
  render(){
    const {
      menuDisplay,
    } = this.props;

    const buttonName = classNames({
      'five_menu_button__container': true,
      'five_menu_button__container--displayed': menuDisplay,
    });
	  return(
      <div
        onClick = {this.toggleMenu}
        className = "five_menu_button"
      >
        <div className = {buttonName}>
          <span className = "five_menu_button__line"/>
          <span className = "five_menu_button__line"/>
          <span className = "five_menu_button__line"/>
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
)(MenuButton);