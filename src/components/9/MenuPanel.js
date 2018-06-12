import React from 'react';
import {connect} from 'react-redux';
import classNames from 'classnames';
import * as menuActions from '../../actions/menu';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router-dom';

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

const BackgroundDisplay = ({hoverOption, backgroundClassName, currentPage, toggleMenu}) => {
  if (hoverOption===1){
    return (
      <Link
        to='/menus/9/1'
        onClick = {toggleMenu}
      >
        <div className={backgroundClassName} style={{backgroundImage: 'url('+image1+')'}}/>
      </Link>
    )
  }
  else if (hoverOption===2){
    return (
    <div className={backgroundClassName} style={{backgroundImage: 'url('+image2+')'}}/>
    )
  }
  else if (hoverOption===3){
    return (
    <div className={backgroundClassName} style={{backgroundImage: 'url('+image3+')'}}/>
    )
  }
  else if (hoverOption===4){
    return (
    <div className={backgroundClassName} style={{backgroundImage: 'url('+image4+')'}}/>
    )
  }
  else if (hoverOption===5){
    return (
    <div className={backgroundClassName} style={{backgroundImage: 'url('+image5+')'}}/>
    )
  }
  else if (hoverOption===6){
    return (
    <div className={backgroundClassName} style={{backgroundImage: 'url('+image6+')'}}/>
    )
  }
  else if (hoverOption===7){
    return (
    <div className={backgroundClassName} style={{backgroundImage: 'url('+image7+')'}}/>
    )
  }
  else if (hoverOption===8){
    return (
    <div className={backgroundClassName} style={{backgroundImage: 'url('+image8+')'}}/>
    )
  }
  else if (hoverOption===9){
    return (
    <div className={backgroundClassName} style={{backgroundImage: 'url('+image9+')'}}/>
    )
  }
  else return null;
}

const RightTextDisplay = ({hoverOption}) => {
  if (hoverOption===1){
    return (
      <RightTextAreaDisplay
        title="Lorem"
        year="2018"
        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
    )
  }
  else if (hoverOption===2){
    return (
      <RightTextAreaDisplay
        title="Ipsum"
        year="2017"
        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
    )
  }
  else if (hoverOption===3){
    return (
      <RightTextAreaDisplay
        title="Dolor"
        year="2018"
        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
    )
  }
  else if (hoverOption===4){
    return (
      <RightTextAreaDisplay
        title="Sit"
        year="2017"
        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
    )
  }
  else if (hoverOption===5){
    return (
      <RightTextAreaDisplay
        title="Amet"
        year="2018"
        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
    )
  }
  else if (hoverOption===6){
    return (
      <RightTextAreaDisplay
        title="Consectetur"
        year="2017"
        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
    )
  }
  else if (hoverOption===7){
    return (
      <RightTextAreaDisplay
        title="Adipiscing"
        year="2018"
        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
    )
  }
  else if (hoverOption===8){
    return (
      <RightTextAreaDisplay
        title="Elit"
        year="2017"
        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
    )
  }
  else if (hoverOption===9){
    return (
      <RightTextAreaDisplay
        title="Sed"
        year="2018"
        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
    )
  }
  else return null;
}

const RightTextAreaDisplay = ({title, year, body}) => {
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
class MenuPanel extends React.Component{
  toggleMenu = () => {
    this.props.menuActions.hoverMenuOption('');
    this.props.menuActions.toggleMenu(false);
  }
  render(){
    const {
      menuDisplay,
      hoverOption,
      currentPage,
    } = this.props;

    const backgroundClassName = classNames(
      'nine_menu_background',
      {
        'nine_menu_background--display':menuDisplay
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
        <BackgroundDisplay
          backgroundClassName={backgroundClassName}
          hoverOption={hoverOption}
          currentPage={currentPage}
          toggleMenu={this.toggleMenu}
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
