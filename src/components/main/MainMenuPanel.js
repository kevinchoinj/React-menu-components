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
    const menuValues = [
      {text: 'Home', link: '/'},
      {text: 'Menu1', link: '/menus/1'},
      {text: 'Menu2', link: '/menus/2'},
      {text: 'Menu3', link: '/menus/3'},
      {text: 'Menu4', link: '/menus/4'},
      {text: 'Menu5', link: '/menus/5'},
      {text: 'Menu6', link: '/menus/6'},
      {text: 'Menu7', link: '/menus/7'},
      {text: 'Menu8', link: '/menus/8'},
      {text: 'Menu9', link: '/menus/9'},
      {text: 'Menu10', link: '/menus/10'},
      {text: 'Menu11', link: '/menus/11'},
      {text: 'Menu12', link: '/menus/12'},
      {text: 'Menu13', link: '/menus/13'},
      {text: 'Menu14', link: '/menus/14'},
      {text: 'Menu15', link: '/menus/15'},
      {text: 'Menu16', link: '/menus/16'},
      {text: 'Menu17', link: '/menus/17'},
    ]
    return(
      <div className = {menuClassName}>
        {menuValues.map((value, index)=>(
        <div key={index}>
         <Link to={value.link}>
            <div className="main_menu_section">
              {value.text}
            </div>
          </Link>
        </div>
        ))}
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
