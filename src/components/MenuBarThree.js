import React from 'react';
import {Link} from 'react-router-dom';

export default class MenuBarThree extends React.Component {
  render(){
    return(
			<div className="three_menu_bar">
				<Link to='/' className="three_menu_bar__link">
					SITE TITLE
				</Link>
			</div>
    );
  }
}
