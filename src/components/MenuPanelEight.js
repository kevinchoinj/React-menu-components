import React from 'react';
import {connect} from 'react-redux';
import classNames from 'classnames';
import bgimage from '../media/construction.jpg';
import MenuTextEight from './MenuTextEight';

class MenuPanelEight extends React.Component{
  render(){
    const {
      menuDisplay,
    } = this.props;

    const backgroundClassName = classNames(
      'eight_menu_background',
      {
        'eight_menu_background--display':menuDisplay
      }
    );

    const menuClassName = classNames(
      'eight_menu_panel',
      {
        'eight_menu_panel--display':menuDisplay
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
          <MenuTextEight />
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
)(MenuPanelEight);
