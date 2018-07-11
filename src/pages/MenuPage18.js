import React from "react";
import PageContent from '../components/18/PageContent'
import ScrolledMenuWrap from '../components/18/ScrolledMenuWrap'

class MenuPage extends React.Component{
  render(){
	  return(
			<div>
        <PageContent/>
        <ScrolledMenuWrap/>
			</div>
	  );
  }
}

export default MenuPage;