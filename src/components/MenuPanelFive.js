import React from 'react';
import {connect} from 'react-redux';
import classNames from 'classnames';

class MenuPanelFive extends React.Component{
  render(){
    const {
      menuDisplay,
    } = this.props;

    const menuClassName = classNames(
      'five_menu_panel',
      {
        'five_menu_panel--display':menuDisplay
      }
    );
    const animationShowName = classNames(
      'five_menu_panel__animation_show',
      {
        'five_menu_panel__animation_show--display':menuDisplay
      }
    );
    const animationHideName = classNames(
      'five_menu_panel__animation_hide',
      {
        'five_menu_panel__animation_hide--display': !menuDisplay
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
)(MenuPanelFive);
