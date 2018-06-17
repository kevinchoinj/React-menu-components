import React from 'react';
import {Link} from 'react-router-dom';
import * as menuActions from '../../actions/menu';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import classNames from 'classnames';

class MenuTextEight extends React.Component{
  toggleMenu = () => {
    this.props.menuActions.toggleMenu(false);
  }
  render(){
    const {
      menuDisplay,
    } = this.props;
    const menuClassName = classNames(
      'eight_menu_panel__links',
      {
        'eight_menu_panel__links--display': menuDisplay,
      }
    );

    const menuValues = [
      {text: 'Menu1', link: '/menus/1'},
      {text: 'Menu2', link: '/menus/2'},
      {text: 'Menu3', link: '/menus/3'},
    ]
    return(
      <div className = {menuClassName}>
        {menuValues.map((value, index)=>(
          <div key={index} className = 'eight_menu_panel__link_div'>
          <Link
            to={value.link}
            className = 'eight_menu_panel__link'
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
    menuDisplay:state.menu.menuDisplay,
  }),
  dispatch => ({
    menuActions: bindActionCreators(menuActions, dispatch),
  }),
)(MenuTextEight);
