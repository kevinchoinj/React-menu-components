import React from 'react';
import {connect} from 'react-redux';
import classNames from 'classnames';
import bgImage from '../../media/construction.jpg';

class MenuPanel extends React.Component{
  render(){
    const {
      menuDisplay,
    } = this.props;

    const menuClassName = classNames(
      'eighteen_menu_panel',
      {
        'eighteen_menu_panel--display':menuDisplay
      }
    );

    const panelStyle = {
      backgroundImage: 'url('+bgImage+')',
    };
    return(
      <div className = {menuClassName} style={panelStyle}>
        <div className="eighteen_menu_panel_overlay"/>
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
)(MenuPanel);
