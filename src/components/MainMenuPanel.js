import React from 'react';
import {connect} from 'react-redux';
import classNames from 'classnames';
import {Link} from 'react-router-dom';

class MainMenuPanel extends React.Component{
  render(){
    const {
      mainMenuDisplay,
    } = this.props;

    const menuClassName = classNames(
      'main_menu_panel',
      {
        'main_menu_panel--display':mainMenuDisplay
      }
    );

    return(
      <div className = {menuClassName}>
      <Link to="/">
        <div>Home</div>
      </Link>
      <Link to="/menus/1">
        <div>Menu 1</div>
      </Link>
      <Link to="/menus/2">
        <div>Menu 2</div>
      </Link>
      <Link to="/menus/3">
        <div>Menu 3</div>
      </Link>
      <Link to="/menus/4">
        <div>Menu 4</div>
      </Link>
      <Link to="/menus/5">
        <div>Menu 5</div>
      </Link>

      </div>
    )
  }
}

export default connect(
  (state, ownProps) => ({
    mainMenuDisplay:state.menu.mainMenuDisplay,
  }),
  dispatch => ({
  }),
)(MainMenuPanel);
