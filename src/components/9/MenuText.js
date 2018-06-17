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
  hoverOption = (option) => {
    this.props.menuActions.hoverMenuOption(option);
  }
  render(){
    const {
      menuDisplay,
    } = this.props;

    const menuValues = [
      {value: '01', text: 'Sample1', link: '/menus/9/1', pageName: 1},
      {value: '02', text: 'Sample2', link: '/menus/9/2', pageName: 2},
      {value: '03', text: 'Sample3', link: '/menus/9/3', pageName: 3},
      {value: '04', text: 'Menus3', link: '/menus/3', pageName: 4},
      {value: '05', text: 'Menus4', link: '/menus/4', pageName: 5},
      {value: '06', text: 'Menus5', link: '/menus/5', pageName: 6},
      {value: '07', text: 'Menus6', link: '/menus/6', pageName: 7},
      {value: '08', text: 'Menus7', link: '/menus/7', pageName: 8},
      {value: '09', text: 'Menus8', link: '/menus/8', pageName: 9},
    ]

    const menuClassName = classNames(
      'nine_menu_panel__links',
      {
        'nine_menu_panel__links--display': menuDisplay,
      }
    );

    return(
      <div className = {menuClassName}>
        {menuValues.map((value, index)=>(
          <div key={index} className="nine_menu_panel__container">
            <Link
              to={value.link}
              className = 'nine_menu_panel__link'
              onClick = {this.toggleMenu}
            >
              <div className = 'nine_menu_panel__link_div' onMouseEnter={()=>this.hoverOption(value.pageName)}>
                <div className="nine_number">{value.value}</div>
                  <div className="nine_menu_panel__link_title">
                    {value.text}
                  </div>
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
    menuDisplay:state.menu.menuDisplay,
  }),
  dispatch => ({
    menuActions: bindActionCreators(menuActions, dispatch),
  }),
)(MenuText);
