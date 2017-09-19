import React from 'react';
import {render} from 'react-dom';
import Slider from './Slider/Slider.jsx';

const IMAGE_DATA = [
  {
    src: require('./image/banner.jpg'),
    alt: 'images-1',
  },
  {
    src: require('./image/banner.jpg'),
    alt: 'images-2',
  },
  {
    src: require('./image/banner.jpg'),
    alt: 'images-3',
  },
];

let Lunbo=React.createClass({
  render(){
     return (
      <div>
          <Slider
              items={IMAGE_DATA}
              speed={1}
              delay={2.1}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
              pause={true}
              autoplay={true}
              dots={true}
              arrows={false}
            />
      </div>
       )
  }          
});
    
export default Lunbo;