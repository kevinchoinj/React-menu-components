import React from "react";
import Scrollbar from 'smooth-scrollbar';
import {connect} from 'react-redux';
import * as scrollActions from '../../actions/scroll';
import {bindActionCreators} from 'redux';

class PageContent extends React.Component{

  componentDidMount() {
		const scrollbar = Scrollbar.init(document.querySelector('#fifteen_content_wrapper'), {
			alwaysShowTracks: true,
			syncCallbacks: true,
		});
		scrollbar.addListener(({ offset }) => {
      this.props.scrollActions.checkScroll(offset.y);
    });
  }

  render(){
	  return(
      <div
        className="fifteen_page_content"
        id="fifteen_content_wrapper"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </div>
	  );
  }
}


export default connect(
  (state, ownProps) => ({

  }),
  dispatch => ({
    scrollActions: bindActionCreators(scrollActions, dispatch),
  }),
)(PageContent);
