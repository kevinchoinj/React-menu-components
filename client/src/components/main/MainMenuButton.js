import React from 'react';
import classNames from 'classnames';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as menuActions from '../../actions/menu';

class MainMenuButton extends React.Component{
  toggleMainMenu = () => {
    this.props.menuActions.toggleMainMenu(!this.props.mainMenuDisplay);
  }
  render(){
    const {
      mainMenuDisplay,
    } = this.props;

    const menuLine1Names= classNames(
      'main_menu_line1',
      {
        'main_menu_line1--display':mainMenuDisplay,
      }
    );
    const menuLine2Names= classNames(
      'main_menu_line2',
      {
        'main_menu_line2--display':mainMenuDisplay,
      }
    );

    return(
      <div
        onClick = {this.toggleMainMenu}
        className = 'main_menu_btn'
      >
        <div
          className = 'main_menu_btn__container'
        >
          <span
            className = {menuLine1Names}
          >
          </span>
          <span
            className = {menuLine2Names}
          >
          </span>
        </div>
      </div>
    );
  }
}

export default connect(
  (state, ownProps) => ({
    mainMenuDisplay:state.menu.mainMenuDisplay,
  }),
  dispatch => ({
    menuActions: bindActionCreators(menuActions, dispatch),
  }),
)(MainMenuButton);