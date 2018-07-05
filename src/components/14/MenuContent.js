import React from "react";
import {Link} from 'react-router-dom';
import * as navbarActions from '../../actions/navbar';
import classNames from 'classnames';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

const COVER_TOP_MARGIN = 50;

class MenuContent extends React.Component{
  toggleSubmenu = (status, statusName) => {
    this.props.navbarActions.toggleNavbarSubmenu(statusName, !status);
  }
  render(){
    const {
      scrolledPage,
      submenuOne,
      submenuTwo,
      submenuThree,
      submenuFour,
    } = this.props;
    const oneSubmenuName = classNames(
      'fourteen_submenu_panel',
      {
        'fourteen_submenu_panel--display': submenuOne,
      }
    );
    const twoSubmenuName = classNames(
      'fourteen_submenu_panel',
      {
        'fourteen_submenu_panel--display': submenuTwo,
      }
    );
    const threeSubmenuName = classNames(
      'fourteen_submenu_panel',
      {
        'fourteen_submenu_panel--display': submenuThree,
      }
    );
    const fourSubmenuName = classNames(
      'fourteen_submenu_panel',
      {
        'fourteen_submenu_panel--display': submenuFour,
      }
    );
    const menuTitleName = classNames(
      'fourteen_menu_title',
      {
        'fourteen_menu_title--scrolled': scrolledPage,
      }
    );
    const menuValues = [
      {
        text: 'Submenu1',
        status: submenuOne,
        statusName: 'menuOne',
        panelName: oneSubmenuName,
        submenuContent: 1
      },
      {
        text: 'Submenu2',
        status: submenuTwo,
        statusName: 'menuTwo',
        panelName: twoSubmenuName,
        submenuContent: 2,
      },
      {
        text: 'Submenu3',
        status: submenuThree,
        statusName: 'menuThree',
        panelName: threeSubmenuName,
        submenuContent: 3,
      },
      {
        text: 'Submenu4',
        status: submenuFour,
        statusName: 'menuFour',
        panelName: fourSubmenuName,
        submenuContent: 4,
      },
    ]
    const menuOneValues = [
      {text: 'Menu1', link: '/menus/1'},
      {text: 'Menu2', link: '/menus/2'},
      {text: 'Menu3', link: '/menus/3'},
    ]
    const menuTwoValues = [
      {text: 'Menu4', link: '/menus/4'},
      {text: 'Menu5', link: '/menus/5'},
      {text: 'Menu6', link: '/menus/6'},
    ]
    const menuThreeValues = [
      {text: 'Menu7', link: '/menus/7'},
      {text: 'Menu8', link: '/menus/8'},
      {text: 'Menu9', link: '/menus/9'},
    ]
    const menuFourValues = [
      {text: 'Menu10', link: '/menus/10'},
      {text: 'Menu11', link: '/menus/11'},
      {text: 'Menu12', link: '/menus/12'},
    ]
	  return(
      <div className="fourteen_menu_content">
        {menuValues.map((value, index)=>(
          <div key={index}>
            <div
              className={menuTitleName}
              onClick={()=>this.toggleSubmenu(value.status, value.statusName)}
            >
              {value.text}
            </div>

            {value.submenuContent === 1 ?
              <div className={value.panelName}>
                {menuOneValues.map((value, index)=>(
                  <div key={index}>
                    <Link
                      to={value.link}
                      className="fourteen_submenu_link"
                    >
                      {value.text}
                    </Link>
                  </div>
                ))}
              </div>
            :null}

            {value.submenuContent === 2 ?
              <div className={value.panelName}>
                {menuTwoValues.map((value, index)=>(
                  <div key={index}>
                    <Link
                      to={value.link}
                      className="fourteen_submenu_link"
                    >
                      {value.text}
                    </Link>
                  </div>
                ))}
              </div>
            :null}

            {value.submenuContent === 3 ?
              <div className={value.panelName}>
                {menuThreeValues.map((value, index)=>(
                  <div key={index}>
                    <Link
                      to={value.link}
                      className="fourteen_submenu_link"
                    >
                    {value.text}
                    </Link>
                  </div>
                ))}
              </div>
            :null}

            {value.submenuContent === 4 ?
              <div className={value.panelName}>
                {menuFourValues.map((value, index)=>(
                  <div key={index}>
                    <Link
                      to={value.link}
                      className="fourteen_submenu_link"
                    >
                    {value.text}
                    </Link>
                  </div>
                ))}
              </div>
            :null}


          </div>
        ))}
			</div>
	  );
  }
}

export default connect(
  (state, ownProps) => {
    const {
      scrollAmount,
    } = state.scroll;
    const {
      navMenus,
    } = state.navbar;
    return{
    scrolledPage: scrollAmount > COVER_TOP_MARGIN,
    submenuOne: navMenus.menuOne,
    submenuTwo: navMenus.menuTwo,
    submenuThree: navMenus.menuThree,
    submenuFour: navMenus.menuFour,
    }

  },
  dispatch => ({
    navbarActions: bindActionCreators(navbarActions, dispatch),
  }),
)(MenuContent);
