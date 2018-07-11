import React from "react";
import classNames from 'classnames';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as menuActions from '../../actions/menu';

const COVER_TOP_MARGIN = 100;

class MenuButton extends React.Component{
	toggleMenu = () => {
    this.props.menuActions.toggleMenu(!this.props.menuDisplay);
  }
  render(){
    const {
      menuDisplay,
      scrolledPage,
    } = this.props;

    const wrapperName = classNames({
      'eighteen_menu_button': true,
      'eighteen_menu_button--scrolled': scrolledPage,
    });
    const buttonName = classNames({
      'eighteen_menu_button__container': true,
      'eighteen_menu_button__container--displayed': menuDisplay,
    });
	  return(
      <div
        onClick = {this.toggleMenu}
        className = {wrapperName}
      >
        <div className = {buttonName}>
          <span className = "eighteen_menu_button__line"/>
          <span className = "eighteen_menu_button__line"/>
          <span className = "eighteen_menu_button__line"/>
        </div>
			</div>
		)
	}
}

export default connect(
  (state, ownProps) => {
    const {
      scrollAmount,
    } = state.scroll;
    const {
      menuDisplay,
    } = state.menu;
    return{
    menuDisplay: menuDisplay,
    scrolledPage: scrollAmount > COVER_TOP_MARGIN,
    }
  },
  dispatch => ({
    menuActions: bindActionCreators(menuActions, dispatch),
  }),
)(MenuButton);