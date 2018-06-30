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

    const menuLine1Names= classNames(
      'twelve_menu_line1',
      {
        'twelve_menu_line1--display':menuDisplay,
      }
    );
    const menuLine2Names= classNames(
      'twelve_menu_line2',
      {
        'twelve_menu_line2--display':menuDisplay,
      }
    );
    const menuLine3Names= classNames(
      'twelve_menu_line3',
      {
        'twelve_menu_line3--display':menuDisplay,
      }
    );
	  return(
      <div
        onClick = {this.toggleMenu}
        className = "twelve_menu_btn"
      >
        <div className = "twelve_menu_btn__container">
          <span className = {menuLine1Names}/>
          <span className = {menuLine2Names}/>
          <span className = {menuLine3Names}/>
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