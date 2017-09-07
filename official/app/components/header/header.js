import React from 'react'
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import './header.less'
import First from '../first.js'
import Second from '../second.js'

let Header=React.createClass({
	render() {
       return (
       	 <div className="contain">
            <div className="header" id='header'>
	            <Link to="/second">
                  <i className="fa fa-navicon"></i>
	            </Link>
	            <span>九门坊</span>
            </div>
       	 </div>	         
       	);
	}
});

export default Header;