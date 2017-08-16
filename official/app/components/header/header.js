import React from 'react'
import './header.less'

let Header=React.createClass({
	render() {
       return (
       	 <div className="contain">
            <div className="header" id='header'>
	            <a href="productShow.html">
                    <i className="fa fa-navicon"></i>
	            </a>
	            <span>九门坊</span>
            </div>
       	 </div>	          
       	);
	}
});

export default Header;