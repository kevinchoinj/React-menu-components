import React from 'react';
import {connect} from 'react-redux';
import classNames from 'classnames';
import bgimage from '../../media/construction.jpg';
import MenuText from './MenuText';

class MenuPanel extends React.Component{
  render(){
    const {
      menuDisplay,
      firstMenuClicked,
    } = this.props;

    const backgroundClassName = classNames(
      'ten_menu_background',
      {
        'ten_menu_background--hidden': (menuDisplay===false) && (firstMenuClicked),
        'ten_menu_background--display':menuDisplay,
      }
    );

    const menuClassName = classNames(
      'ten_menu_panel',
      {
        'ten_menu_panel--hidden': (menuDisplay===false) && (firstMenuClicked),
        'ten_menu_panel--display':menuDisplay
      }
    );

    const bgStyle={
      backgroundImage: 'url('+bgimage+')'
    }

    return(
      <div>
        <div className = {backgroundClassName} style={bgStyle}>
        </div>
        <div className = {menuClassName}>
          <MenuText />
        </div>
      </div>
    )
  }
}

export default connect(
  (state, ownProps) => ({
    menuDisplay:state.menu.menuDisplay,
    firstMenuClicked: state.menu.firstMenuClicked,
  }),
  dispatch => ({
  }),
)(MenuPanel);
