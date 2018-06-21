import React from 'react';
import {Link} from 'react-router-dom';
import * as menuActions from '../../actions/menu';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import classNames from 'classnames';

class MenuText extends React.Component{
  toggleMenu = () => {
    this.props.menuActions.toggleMenu(false);
  }
  render(){
    const {
      menuDisplay,
      firstMenuClicked,
    } = this.props;
    const menuClassName = classNames(
      'ten_menu_panel__links',
      {
        'ten_menu_panel__links--display': menuDisplay,
        'ten_menu_panel__links--hidden': (menuDisplay===false) && (firstMenuClicked),
      }
    );
    const menuValues = [
      {text: 'Menu1', link: '/menus/1'},
      {text: 'Menu2', link: '/menus/2'},
      {text: 'Menu3', link: '/menus/3'},
      {text: 'Menu4', link: '/menus/4'},
      {text: 'Menu5', link: '/menus/5'},
    ]
    return(
      <div className = {menuClassName}>
        {menuValues.map((value, index)=>(
          <div key={index} className="ten_menu_panel__link_container">
            <Link
              to={value.link}
              className = 'ten_menu_panel__link'
              onClick = {this.toggleMenu}
            >
              {value.text}
            </Link>
          </div>
        ))}
      </div>
    )
  }
}

export default connect(
  (state, ownProps) => ({
    menuDisplay: state.menu.menuDisplay,
    firstMenuClicked: state.menu.firstMenuClicked,
  }),
  dispatch => ({
    menuActions: bindActionCreators(menuActions, dispatch),
  }),
)(MenuText);
