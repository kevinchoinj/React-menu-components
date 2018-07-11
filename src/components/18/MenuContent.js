import React from "react";
import {Link} from 'react-router-dom';
import * as navbarActions from '../../actions/navbar';
import classNames from 'classnames';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

const COVER_TOP_MARGIN = 0;

class MenuContent extends React.Component{
  render(){
    const {
      scrolledPage,
      scrolledTop
    } = this.props;
    const menuClassName = classNames(
      'eighteen_menu_content',
      {
        'eighteen_menu_content--top': scrolledTop,
        'eighteen_menu_content--scrolled': scrolledPage,
      }
    );

    const menuValues = [
      {
        text: 'Menu1',
        link: '/menus/1',
      },
      {
        text: 'Menu2',
        link: '/menus/2',
      },
      {
        text: 'Menu3',
        link: '/menus/3',
      },
      {
        text: 'Menu4',
        link: '/menus/4',
      },
      {
        text: 'Menu5',
        link: '/menus/5',
      },
    ]

	  return(
      <div className={menuClassName}>
        {menuValues.map((value, index)=>(
          <div key={index} className="eighteen_submenu_link__container" >
            <Link to ={value.link} className="eighteen_submenu_link">
              {value.text}
            </Link>
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
    return{
    scrolledPage: scrollAmount > COVER_TOP_MARGIN,
    scrolledTop: scrollAmount === 0,
    }

  },
  dispatch => ({
    navbarActions: bindActionCreators(navbarActions, dispatch),
  }),
)(MenuContent);
