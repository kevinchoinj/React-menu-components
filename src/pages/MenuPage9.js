import React from "react";
import {Route} from 'react-router-dom';
import MenuWrap from '../components/9/MenuWrap';
import classNames from 'classnames';
import {connect} from 'react-redux';
import MenuPageNineSamplePageOne from '../components/9/SamplePage1';
import MenuPageNineSamplePageTwo from '../components/9/SamplePage2';
import MenuPageNineSamplePageThree from '../components/9/SamplePage3';

class MenuPageNine extends React.Component{
  render(){
		const {
      menuDisplay,
    } = this.props;
		const wrapperClassName = classNames(
      'nine_page_wrapper',
      {
        'nine_page_wrapper--display':menuDisplay
      }
    );
	  return(
			<div className={wrapperClassName}>
				 <Route
					exact path="/menus/9/1"
					render={(props) =>
						<MenuPageNineSamplePageOne {...props} />
					}
				/>
				<Route
					exact path="/menus/9/2"
					render={(props) =>
						<MenuPageNineSamplePageTwo {...props} />
					}
				/>
				<Route
					exact path="/menus/9/3"
					render={(props) =>
						<MenuPageNineSamplePageThree {...props} />
					}
				/>
				<MenuWrap />
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
)(MenuPageNine);
