import React from "react";
import {Link} from 'react-router-dom';

class Home extends React.Component{
  render(){
	  return(
			<div>
        <Link to="/menus/1">
          Menu one
        </Link>
        <br/>
        <Link to="/menus/2">
          Menu two
        </Link>
        <br/>
        <Link to="/menus/3">
          Menu three
        </Link>
			</div>
	  );
  }
}

export default Home;