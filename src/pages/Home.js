import React from "react";
import img1 from '../media/home1.jpg';
import img2 from '../media/home2.jpg';
import img3 from '../media/home3.jpg';
import img4 from '../media/home4.jpg';
import img5 from '../media/home5.jpg';
import img6 from '../media/home6.jpg';
import img7 from '../media/home7.jpg';
import img8 from '../media/home8.jpg';
import img9 from '../media/home9.jpg';
import img10 from '../media/home10.jpg';
import img11 from '../media/home11.jpg';
import img12 from '../media/home12.jpg';
import img13 from '../media/home13.jpg';
import {Link} from 'react-router-dom';

class Home extends React.Component{
  render(){
		const pageValues = [
      {text: 'Page1', link: '/menus/1', imageSrc: img1},
      {text: 'Page2', link: '/menus/2', imageSrc: img2},
      {text: 'Page3', link: '/menus/3', imageSrc: img3},
      {text: 'Page4', link: '/menus/4', imageSrc: img4},
      {text: 'Page5', link: '/menus/5', imageSrc: img5},
      {text: 'Page6', link: '/menus/6', imageSrc: img6},
      {text: 'Page7', link: '/menus/7', imageSrc: img7},
      {text: 'Page8', link: '/menus/8', imageSrc: img8},
      {text: 'Page9', link: '/menus/9', imageSrc: img9},
      {text: 'Page10', link: '/menus/10', imageSrc: img10},
			{text: 'Page11', link: '/menus/11', imageSrc: img11},
      {text: 'Page12', link: '/menus/12', imageSrc: img12},
      {text: 'Page13', link: '/menus/13', imageSrc: img13},
    ]
	  return(
			<div className="home_wrapper">
      {pageValues.map((value, key)=> (
      <div className="home_image__container" key={key}>
			  <div className="home_title">
				  {value.text}
				</div>
        <Link to={value.link}>
          <img src={value.imageSrc} alt="" className="home_image"/>
        </Link>
			</div>
			))}

			</div>
	  );
  }
}

export default Home;