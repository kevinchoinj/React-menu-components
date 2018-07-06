import React from 'react';
import {connect} from 'react-redux';
import {Motion, spring} from 'react-motion';
import * as motionActions from '../../actions/motion';
import {bindActionCreators} from 'redux';
import classNames from 'classnames';
import image1 from '../../media/1.jpg';
import image2 from '../../media/2.jpg';
import image3 from '../../media/3.jpg';
import image4 from '../../media/4.jpg';
import image5 from '../../media/5.jpg';
import image6 from '../../media/6.jpg';
import image7 from '../../media/7.jpg';
import image8 from '../../media/8.jpg';

const imageValues = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
]

const springSettings = {stiffness: 170, damping: 26};

class MenuCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [[792, 396], [792, 396], [792, 396], [792, 396], [792, 396], [792, 396], [792, 396], [792, 396]],
    };
  };

  handleChange = ({target: {value}}) => {
    this.props.motionActions.setCurrentPhoto(value);
  };

  render() {
    const {photos} = this.state;
    const {
      currentPhoto,
      menuDisplay,
    }=this.props;

    const [currWidth, currHeight] = photos[this.props.currentPhoto];

    const widths = photos.map(([origW, origH]) => currHeight / origH * origW);

    const leftStartCoords = widths
      .slice(0, this.props.currentPhoto)
      .reduce((sum, width) => sum - width, 0);

    let configs = [];
    photos.reduce((prevLeft, [origW, origH], i) => {
      configs.push({
        left: spring(prevLeft, springSettings),
        height: spring(currHeight, springSettings),
        width: spring(widths[i], springSettings),
      });
      return prevLeft + widths[i];
    }, leftStartCoords);



    const photosClassName = classNames(
      'sixteen_menu_photo_container',
      {
        'sixteen_menu_photo_container--display':menuDisplay
      }
    );

    return (
      <div className="sixteen_menu_photo_outer">
        <div className={photosClassName}>
          <Motion style={{height: spring(currHeight), width: spring(currWidth)}}>
            {container =>
              <div className="demo4-inner" style={container}>
                {configs.map((style, i) =>
                  <Motion key={i} style={style}>
                    {style =>
                    <div>
                      <img className="demo4-photo" src={imageValues[currentPhoto]} style={style} alt=""/>
                      </div>
                    }
                  </Motion>
                )}
              </div>
            }
          </Motion>
        </div>
      </div>
    );
  };
}

export default connect(
  (state, ownProps) => ({
    currentPhoto: state.motion.currentPhoto,
    menuDisplay:state.menu.menuDisplay,
  }),
  dispatch => ({
    motionActions: bindActionCreators(motionActions, dispatch),
  }),
)(MenuCarousel);
