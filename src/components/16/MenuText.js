import React from 'react';
import {Link} from 'react-router-dom';
import * as menuActions from '../../actions/menu';
import * as motionActions from '../../actions/motion';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import classNames from 'classnames';

class MenuText extends React.Component{
  toggleMenu = () => {
    this.props.menuActions.toggleMenu(false);
  }
  hoverOption = (option) => {
    this.props.motionActions.setCurrentPhoto(option);
  }
  render(){
    const {
      menuDisplay,
    } = this.props;
    const menuClassName = classNames(
      'sixteen_menu_panel__links',
      {
        'sixteen_menu_panel__links--display': menuDisplay
      }
    );
    const wrapperName = classNames(
      'sixteen_menu_panel__links_wrapper',
      {
        'sixteen_menu_panel__links_wrapper--display': menuDisplay
      }
    );

    const menuValues = [
      {text: 'Menu1', link: '/menus/1', pageName: 0},
      {text: 'Menu2', link: '/menus/2', pageName: 1},
      {text: 'Menu3', link: '/menus/3', pageName: 2},
      {text: 'Menu4', link: '/menus/4', pageName: 3},
      {text: 'Menu5', link: '/menus/5', pageName: 4},
      {text: 'Menu5', link: '/menus/5', pageName: 5},
      {text: 'Menu5', link: '/menus/5', pageName: 6},
      {text: 'Menu5', link: '/menus/5', pageName: 7},
    ];

    return(
      <div className={wrapperName}>
        <div className = {menuClassName}>
          {menuValues.map((value, index)=>(
            <div key={index} className="sixteen_menu_panel__sect">
              <Link
                to={value.link}
                className = 'sixteen_menu_panel__link'
                onClick = {this.toggleMenu}
                onMouseEnter={()=>this.hoverOption(value.pageName)}
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
    motionActions: bindActionCreators(motionActions, dispatch),
  }),
)(MenuText);
