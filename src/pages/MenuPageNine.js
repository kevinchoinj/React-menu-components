import React from "react";
import {Route} from 'react-router-dom';
import MenuWrap from '../components/9/MenuWrap';
import MenuPageNineSamplePageOne from '../components/9/SamplePage1';
import MenuPageNineSamplePageTwo from '../components/9/SamplePage2';
import MenuPageNineSamplePageThree from '../components/9/SamplePage3';

class MenuPageNine extends React.Component{
  render(){
	  return(
			<div>
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

export default MenuPageNine;