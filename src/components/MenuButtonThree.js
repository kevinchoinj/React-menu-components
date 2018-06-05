import React from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as menuActions from '../actions/menu';
import classNames from 'classnames';

class MenuButtonThree extends React.Component{
	toggleMenu(){
		this.props.menuActions.toggleMenu(!this.props.menuDisplay);
	}
  render(){
    const {
      menuDisplay,
    } = this.props;

		const buttonName = classNames({
      'three_menu_button': true,
      'three_menu_button--displayed': menuDisplay,
    });

	  return(
			<div
				className={buttonName}
				onClick={()=>this.toggleMenu(menuDisplay)}
			>
				<span className="three_menu_button__line_one"></span>
				<span className="three_menu_button__line_two"></span>
				<span className="three_menu_button__line_three"></span>
			</div>
	  );
  }
}

export default connect(
  (state, ownProps) => ({
    menuDisplay:state.menu.menuDisplay,
  }),
  dispatch => ({
    menuActions: bindActionCreators(menuActions, dispatch),
  }),
)(MenuButtonThree);
