import React from 'react';
import classNames from 'classnames';
import MenuContent from './MenuContent';
import {connect} from 'react-redux';

const COVER_TOP_MARGIN = 50;

class MenuBar extends React.Component{
  render(){
    const {
      scrolledPage,
    } = this.props;
    const menuBarName= classNames(
      'fourteen_menu_bar',
      {
        'fourteen_menu_bar--scrolled': scrolledPage,
      }
    );
    return(
      <div className={menuBarName}>
        <MenuContent/>
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
    };
  },
  dispatch => ({
  }),
)(MenuBar);
