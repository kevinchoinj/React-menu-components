import React from 'react';
import {connect} from 'react-redux';
import classNames from 'classnames';
import * as menuActions from '../../actions/menu';
import {bindActionCreators} from 'redux';
import {history} from '../../store';

import image1 from '../../media/1.jpg';
import image2 from '../../media/2.jpg';
import image3 from '../../media/3.jpg';
import image4 from '../../media/4.jpg';
import image5 from '../../media/5.jpg';
import image6 from '../../media/6.jpg';
import image7 from '../../media/7.jpg';
import image8 from '../../media/8.jpg';
import image9 from '../../media/9.jpg';

import MenuText from './MenuText';
import BackgroundImageDisplay from './BackgroundImageDisplay';

const RightTextDisplay = ({hoverOption}) => {
  if (hoverOption==='home'){
    return (
      <RightTextAreaDisplay
        noDetails= {true}
        title="Kevin Choi"
      />
    )
  }
  else if (hoverOption==='gaming'){
    return (
      <RightTextAreaDisplay
        noDetails= {true}
        title="Gaming"
      />
    )
  }
  else if (hoverOption===1){
    return (
      <RightTextAreaDisplay
        title="University of Waterloo Thermo-Fluids Seminar"
        year="2017"
        body="Creation - This site was built for the University of Waterloo's Department of Mechanical & Mechantronics Engineering."
      />
    )
  }
  else if (hoverOption===2){
    return (
      <RightTextAreaDisplay
        title="toocoolforschool.us"
        year="2016-2017"
        body="Editing - Various additions were made to the site including the following: a responsive closeable overlay on page load, editing of submenus, editing of products and product descriptions, and a responsive customized carousel."
      />
    )
  }
  else if (hoverOption===3){
    return (
      <RightTextAreaDisplay
        title="Ashley Wildcat"
        year="2017-2018"
        body="Creation - Ashley Wildcat is an independent model and session wrestler."
      />
    )
  }
  else if (hoverOption===4){
    return (
      <RightTextAreaDisplay
        title="Discord Bot"
        year="2017"
        body="Creation - The Discord API was used to initially create the bot which would return simple text messages when users entered certain text phrases. Afterwards, the Imgur API was used to pull images from various image albums and subreddits."
      />
    )
  }
  else if (hoverOption===5){
    return (
      <RightTextAreaDisplay
        title="LastFM Personal Project"
        year="2017-2018"
        body="Creation - The site polls the Last.fm API on an interval to update the displayed track. This project was later updated to work with firebase to allow logging in and favoriting tracks."
      />
    )
  }
  else if (hoverOption===6){
    return (
      <RightTextAreaDisplay
        title="Ideal Leida"
        year="2016"
        body="Creation - Edward Leida was trained as both an Industrial and Graphic Designer. During the course of his career, he has done extensive work in the areas of Corporate Identity, Editorial Design, Book Design and Advertising."
      />
    )
  }
  else if (hoverOption===7){
    return (
      <RightTextAreaDisplay
        title="PowerPCME"
        year="2017"
        body="Creation - PowerPCME is a soundcloud artist who uses Nostalgia and false memories to make you feel things."
      />
    )
  }
  else if (hoverOption===8){
    return (
      <RightTextAreaDisplay
        title="Dr. Jart+ Newsletter"
        year="2016"
        body="Creation - Dr. Jart+ produces scientific and reliable products that lead to healthy and beautiful skin across 4 continents in 15 countries."
      />
    )
  }
  else if (hoverOption===9){
    return (
      <RightTextAreaDisplay
        title="Why Not Smile"
        year="2016"
        body="Editing - WNS (a.k.a. Why Not Smile) is a multidisciplinary creative consultancy based in New York City."
      />
    )
  }
  else if (hoverOption===10){
    return (
      <RightTextAreaDisplay
        title="Why Not Smile Library"
        year="2016"
        body="Creation - WNS Library is a visual collection of Why Not Smile's books."
      />
    )
  }
  else return null;
}

const RightTextAreaDisplay = ({title, year, body, noDetails}) => {
  if (noDetails){
    return (
      <div className="nine_text_right">
      <div className="nine_text_right__title">
        {title}
      </div>
    </div>
    )
  }
  else {
    return (
      <div className="nine_text_right">
      <div className="nine_text_right__title">
        {title}
      </div>
      <div className="nine_text_right__subcontainer">
        <div className="nine_text_right__subtitle">
          <div className="nine_text_right__label">
          Year:
          </div>
          <div className="nine_text_right__subvalue">
            {year}
          </div>
        </div>
      </div>

      <div className="nine_text_right__subtext">
        {body}
      </div>
    </div>
    )
  }
}

class MenuPanel extends React.Component{
  componentDidMount(){
    this.image = new Image();
    this.image.src =  image1;
    this.image.onload = this.handleImageLoaded;
  }
  handleImageLoaded = () => {
    console.log("asdf");
}
  toggleMenu = (path) => {
    this.props.menuActions.hoverMenuOption('');
    this.props.menuActions.toggleMenu(false);
    history.push(path);
  }
  render(){
    const {
      menuDisplay,
      hoverOption,
    } = this.props;

    const backgroundClassName = classNames(
      'nine_menu_background',
      {
        'nine_menu_background--display':menuDisplay && hoverOption,
      }
    );

    const menuClassNameLeft = classNames(
      'nine_menu_panel__left',
      {
        'nine_menu_panel__left--display':menuDisplay
      }
    );
    const menuClassNameRight = classNames(
      'nine_menu_panel__right',
      {
        'nine_menu_panel__right--display':menuDisplay
      }
    );

    return(
      <div>
        <div className={backgroundClassName}/>
        <BackgroundImageDisplay
          pathName='/menus/9/1'
          isActive={hoverOption===1}
          backgroundName={image1}
        />
        <BackgroundImageDisplay
          pathName='/menus/9/2'
          isActive={hoverOption===2}
          backgroundName={image2}
        />
        <BackgroundImageDisplay
          pathName='/menus/9/3'
          isActive={hoverOption===3}
          backgroundName={image3}
        />
        <BackgroundImageDisplay
          pathName='/menus/1'
          isActive={hoverOption===4}
          backgroundName={image4}
        />
        <BackgroundImageDisplay
          pathName='/menus/2'
          isActive={hoverOption===5}
          backgroundName={image5}
        />
        <BackgroundImageDisplay
          pathName='/menus/3'
          isActive={hoverOption===6}
          backgroundName={image6}
        />
        <BackgroundImageDisplay
          pathName='/menus/4'
          isActive={hoverOption===7}
          backgroundName={image7}
        />
        <BackgroundImageDisplay
          pathName='/menus/5'
          isActive={hoverOption===8}
          backgroundName={image8}
        />
        <BackgroundImageDisplay
          pathName='/menus/6'
          isActive={hoverOption===9}
          backgroundName={image9}
        />
        <BackgroundImageDisplay
          pathName='/menus/7'
          isActive={hoverOption===10}
          backgroundName={image1}
        />
        <BackgroundImageDisplay
          pathName='/menus/8'
          isActive={hoverOption===11}
          backgroundName={image2}
        />
        <BackgroundImageDisplay
          pathName='/menus/9'
          isActive={hoverOption===12}
          backgroundName={image3}
        />
        <div className={menuClassNameLeft}>
          <div className="nine_indicator">
          &larr;
          </div>
          <MenuText />
        </div>
        <div className = {menuClassNameRight}>
          <RightTextDisplay
            hoverOption={hoverOption}
          />
        </div>
      </div>
    )
  }
}

export default connect(
  (state, ownProps) => ({
    hoverOption: state.menu.hoverOption,
    menuDisplay:state.menu.menuDisplay,
    currentPage: state.menu.currentPage,
  }),
  dispatch => ({
    menuActions: bindActionCreators(menuActions, dispatch),
  }),
)(MenuPanel);
