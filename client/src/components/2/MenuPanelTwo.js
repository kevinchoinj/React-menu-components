import React from 'react';
import {connect} from 'react-redux';
import classNames from 'classnames';
import MenuTextTwo from './MenuTextTwo';

class MenuPanelOne extends React.Component{
  render(){
    const {
      menuDisplay,
    } = this.props;

    const menuClassName = classNames(
      'two_menu_panel',
      {
        'two_menu_panel--display':menuDisplay
      }
    );

    return(
      <div className = {menuClassName}>
        <MenuTextTwo />
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
)(MenuPanelOne);
