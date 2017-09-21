import React from 'react'
import './title.less'

let Title=React.createClass({
	render(){
		return(
             <h2>{this.props.name}</h2>
			)
	}
});

export default Title;