import React from 'react';
import {connect} from 'react-redux';
import classNames from 'classnames';
import MenuTextFour from './MenuTextFour';

class MenuPanelFour extends React.Component{
  render(){
    const {
      menuDisplay,
    } = this.props;
    const backgroundName = classNames(
      'four_menu_background',
      {
        'four_menu_background--display':menuDisplay,
        'four_menu_background--hidden':!menuDisplay
      }
    )
    const animationShowName = classNames(
      'four_menu_panel__animation_show',
      {
        'four_menu_panel__animation_show--display':menuDisplay
      }
    );
    const animationHideName = classNames(
      'four_menu_panel__animation_hide',
      {
        'four_menu_panel__animation_hide--display': !menuDisplay
      }
    );
    return(
      <div>
        <div className={backgroundName}/>
        <MenuTextFour />
        <div className={animationShowName}/>
        <div className={animationHideName}/>
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
)(MenuPanelFour);
