import React from "react";
import MenuContent from './MenuContent';
import {connect} from 'react-redux';

class MenuBar extends React.Component{
  render(){
	  return(
      <div className="eighteen_menu_bar">
        <MenuContent/>
      </div>
	  );
  }
}

export default connect(
  (state, ownProps) => {
  },
  dispatch => ({
  }),
)(MenuBar);
