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
    } = this.props;
    const menuClassName = classNames(
      'twelve_menu_panel__links',
      {
        'twelve_menu_panel__links--display': menuDisplay
      }
    );
    const wrapperName = classNames(
      'twelve_menu_panel__links_wrapper',
      {
        'twelve_menu_panel__links_wrapper--display': menuDisplay
      }
    );

    const menuValues = [
      {text: 'Menu1', link: '/menus/1'},
      {text: 'Menu2', link: '/menus/2'},
      {text: 'Menu3', link: '/menus/3'},
      {text: 'Menu4', link: '/menus/4'},
      {text: 'Menu5', link: '/menus/5'},
    ];

    return(
      <div className={wrapperName}>
        <div className = {menuClassName}>
          {menuValues.map((value, index)=>(
            <div key={index} className="twelve_menu_panel__sect">
              <Link
                to={value.link}
                className = 'twelve_menu_panel__link'
                onClick = {this.toggleMenu}
              >
                {value.text}
              </Link>

            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default connect(
  (state, ownProps) => ({
    menuDisplay:state.menu.menuDisplay,
  }),
  dispatch => ({
    menuActions: bindActionCreators(menuActions, dispatch),
  }),
)(MenuText);
