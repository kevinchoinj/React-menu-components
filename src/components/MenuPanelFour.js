import React from 'react';
import {connect} from 'react-redux';
import classNames from 'classnames';

class MenuPanelFour extends React.Component{
  render(){
    const {
      menuDisplay,
    } = this.props;

    const menuClassName = classNames(
      'four_menu_panel',
      {
        'four_menu_panel--display':menuDisplay
      }
    );
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
      <div className = {menuClassName}>
      </div>

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
