import React from 'react'
//import {Link} from 'react-router-dom'
import './header.less'
import First from '../first.js'
import Second from '../second.js'

let Header=React.createClass({
	render() {
       return (
       	 <div className="contain">
            <div className="header" id='header'>
                  <i className="fa fa-navicon"></i>
	            <span>九门坊</span>
            </div>
       	 </div>	         
       	);
	}
});

export default Header;