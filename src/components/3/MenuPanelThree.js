import React from "react";
import {Link} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import classNames from 'classnames';
import * as menuActions from '../../actions/menu';

var FontAwesome = require('react-fontawesome');

class MenuPanelThree extends React.Component{
  closeMenu = () => {
    this.props.menuActions.toggleMenu(false);
  }
  render(){
		const panelName = classNames({
      'three_menu': true,
      'three_menu--displayed': this.props.menuDisplay,
    });
    const homeName = classNames({
      'three_menu_select': true,
      'three_menu_select--selected': this.props.currentPage==='home',
    });
    const menuOneName = classNames({
      'three_menu_select': true,
      'three_menu_select--selected': this.props.currentPage==='menuOne',
    });
    const menuTwoName = classNames({
      'three_menu_select': true,
      'three_menu_select--selected': this.props.currentPage==='menuTwo',
    });
    const menuThreeName = classNames({
      'three_menu_select': true,
      'three_menu_select--selected': this.props.currentPage==='menuThree',
    });
    const menuFourName = classNames({
      'three_menu_select': true,
      'three_menu_select--selected': this.props.currentPage==='menuFour',
    });

    const menuValues = [
      {text: 'HOME', link: '/', classValue: homeName},
      {text: 'MENU ONE', link: '/menus/2', classValue: menuOneName},
      {text: 'MENU TWO', link: '/menus/2', classValue: menuTwoName},
      {text: 'MENU THREE', link: '/menus/3', classValue: menuThreeName},
      {text: 'MENU FOUR', link: '/menus/4', classValue: menuFourName},
    ]
    const linkValues = [
      {text: 'OUTLINK', link: 'https://google.com/'},
      {text: 'OUTLINK TWO', link: 'https://google.com/'},
    ]
	  return(
        <div className={panelName}>
          {menuValues.map((value, index)=>(
            <div key={index}>
              <Link to={value.link} className='three_menu_link' onClick={this.closeMenu}>
                <div className={value.classValue}>
                  {value.text}
                  <div className='three_menu_indicator'></div>
                </div>
              </Link>
            </div>
          ))}

          {linkValues.map((value, index)=>(
            <div key={index}>
              <a
                href={value.link}
                target='_blank'
                rel='noopener noreferrer'
                className='three_menu_link'
                onClick={this.props.toggler}
              >
                <div className='three_menu_outlink'>
                  {value.text}&nbsp;<FontAwesome name="external-link-alt"/>
                </div>
              </a>
            </div>
          ))}
          <br/><br/>
          <a
            href='https://twitter.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FontAwesome name="twitter" className="three_menu_link"/>
          </a>
          <a
            href='https://www.facebook.com/'
          >
            <FontAwesome name="facebook" className="three_menu_link"/>
          </a>
          <div className='three_menu_email'>
            email@example.com
          </div>
				</div>

	  );
  }
}

export default connect(
  (state, ownProps) => ({
    menuDisplay:state.menu.menuDisplay,
    currentPage:state.menu.currentPage,
  }),
  dispatch => ({
    menuActions: bindActionCreators(menuActions, dispatch),
  }),
)(MenuPanelThree);
