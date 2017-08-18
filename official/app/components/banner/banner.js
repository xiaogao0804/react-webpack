import React from 'react'
import './banner.less'
import Lunbo from '../slider/index'

let Banner=React.createClass({
	render(){
		return(
            <div>
               <div className="banner" id='banner'>
                  <Lunbo />
               </div>
            </div>
			)
	}
});

export default Banner;