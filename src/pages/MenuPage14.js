import React from "react";
import MenuWrap from '../components/14/MenuWrap';
import PageContent from '../components/14/PageContent'

class MenuPage extends React.Component{
  render(){
	  return(
			<div>
        <PageContent/>
        <MenuWrap/>
			</div>
	  );
  }
}

export default MenuPage;