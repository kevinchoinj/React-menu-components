import React from "react";
import MenuText from './MenuText';
import Scrollbar from 'smooth-scrollbar';
import classNames from 'classnames';
import {connect} from 'react-redux';

class MenuContent extends React.Component{
  componentDidMount() {
		Scrollbar.init(document.querySelector('#sixteen_content_wrapper'), {
			alwaysShowTracks: true,
		});
  }

  render(){
    const {menuDisplay} = this.props;
    const wrapperClassName = classNames(
      'sixteen_menu_text_wrapper',
      {
        'sixteen_menu_text_wrapper--display': menuDisplay
      }
    );
	  return(
      <div
        className={wrapperClassName}
        id="sixteen_content_wrapper"
      >
        <MenuText/>
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
)(MenuContent);