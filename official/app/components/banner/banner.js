import React from 'react'
import ReactDOM from 'react-dom'
import './banner.less'
import Lunbo from '../slider/index'

let Banner=React.createClass({
	render(){
		return(
            <div>
               <div className="banner" id='banner'>
               </div>
            </div>
			)
	}
});

ReactDOM.render(
      <Lunbo />,
      document.getElementById('banner')
	)

export default Banner;