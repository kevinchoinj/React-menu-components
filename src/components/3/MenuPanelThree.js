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

	  return(
        <div className={panelName}>
        <Link to='/' className='three_menu_link' onClick={this.closeMenu}>
          <div className={homeName}>
            HOME
            <div className='three_menu_indicator'></div>
          </div>
        </Link>

        <Link to='/menus/1' className='three_menu_link' onClick={this.closeMenu}>
          <div className={menuOneName}>
            MENU ONE
            <div className='three_menu_indicator'></div>
          </div>
        </Link>

        <Link to='/menus/2' className='three_menu_link' onClick={this.closeMenu}>
          <div className={menuTwoName}>
            MENU TWO
            <div className='three_menu_indicator'></div>
          </div>
        </Link>

        <Link to='/menus/3' className='three_menu_link' onClick={this.closeMenu}>
          <div className={menuThreeName}>
            MENU THREE
            <div className='three_menu_indicator'></div>
          </div>
        </Link>

        <Link to='/menus/4' className='three_menu_link' onClick={this.closeMenu}>
          <div className={menuFourName}>
            MENU FOUR
            <div className='three_menu_indicator'></div>
          </div>
        </Link>

        <a
          href='https://google.com/'
          target='_blank'
          rel='noopener noreferrer'
          className='three_menu_link'
          onClick={this.props.toggler}
        >
          <div className='three_menu_outlink'>
            OUTLINK &nbsp;<FontAwesome name="external-link-alt"/>
          </div>
        </a>

        <a
          href='https://google.com/'
          target='_blank'
          rel='noopener noreferrer'
          className='three_menu_link'
          onClick={this.props.toggler}
        >
          <div className='three_menu_outlink'>
            OUTLINK &nbsp;<FontAwesome name="external-link-alt"/>
          </div>
        </a>

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
