import React from "react";
import MenuPanel from './MenuPanel';
import MenuButton from './MenuButton';
import {connect} from 'react-redux';
import classNames from 'classnames';

class MenuWrap extends React.Component{
  render(){
    const {
      menuDisplay,
    }=this.props;
    const wrapperName = classNames(
      'nine_menu_wrapper',
      {
        'nine_menu_wrapper--display':menuDisplay
      }
    );

	  return(
			<div className={wrapperName}>
        <MenuPanel />
        <MenuButton />
			</div>
	  );
  }
}

export default connect(
  (state, ownProps) => ({
    menuDisplay:state.menu.menuDisplay,
  }),
  dispatch => ({
  }),
)(MenuWrap);
