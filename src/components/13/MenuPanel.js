import React from 'react';
import {connect} from 'react-redux';
import classNames from 'classnames';
import logoImage from '../../media/google.png';
import MenuText from './MenuText';

class MenuPanelEight extends React.Component{
  render(){
    const {
      menuDisplay,
    } = this.props;

    const menuClassName = classNames(
      'thirteen_menu_panel',
      {
        'thirteen_menu_panel--display':menuDisplay
      }
    );

    return(
      <div className = {menuClassName}>
        <div className="thirteen_menu_header__wrapper">
          <div className="thirteen_menu_header">
            <div className="thirteen_menu_logo">
              <img src={logoImage} alt="" className="thirteen_menu_logo__image"/>
            </div>
          </div>
        </div>
        <MenuText />
        <div className="thirteen_menu_footer__wrapper">
          <div className="thirteen_menu_footer">
            <div className="thirteen_menu_footer__links">
              <div className="thirteen_menu_footer__link">
                Link1
              </div>
              <div className="thirteen_menu_footer__link">
                Link2
              </div>
              <div className="thirteen_menu_footer__link">
                Link3
              </div>
            </div>
            <div className="thirteen_menu_footer__right">
              Some Other Thing
            </div>
          </div>
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
  }),
)(MenuPanelEight);
