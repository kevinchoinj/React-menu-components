import React from 'react';
import MenuWrapThree from '../components/3/MenuWrapThree';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as menuActions from '../actions/menu';

class MenuPageThree extends React.Component{
  componentDidMount(){
    this.props.menuActions.setPageName('menuThree');
  }
  render(){
    return(
      <div>
        <MenuWrapThree />
      </div>
    );
  }
}

export default connect(
  () => ({
  }),
  dispatch => ({
    menuActions: bindActionCreators(menuActions, dispatch),
  }),
)(MenuPageThree);
