import React from 'react';
import Slider from './Slider/Slider';

let Lunbo=React.createClass({
  IMAGE_DATA:function(){
     return (
   [
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
      }
  ]
      )
  },
    render:function(){
          return (
            <Slider
              items={IMAGE_DATA}
              speed={1.2}
              delay={2.1}
              pause={true}
              autoplay={true}
              dots={true}
              arrows={true}
            />
       )
    }
})
                                      

export default Lunbo;