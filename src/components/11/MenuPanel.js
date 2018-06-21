import React from 'react';
import {connect} from 'react-redux';
import classNames from 'classnames';
import bgimage from '../../media/construction.jpg';
import MenuText from './MenuText';

class MenuPanel extends React.Component{
  render(){
    const {
      menuDisplay,
    } = this.props;

    const backgroundClassName = classNames(
      'eleven_menu_background',
      {
        'eleven_menu_background--display':menuDisplay
      }
    );

    const menuClassName = classNames(
      'eleven_menu_panel',
      {
        'eleven_menu_panel--display':menuDisplay
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
  }),
  dispatch => ({
  }),
)(MenuPanel);
