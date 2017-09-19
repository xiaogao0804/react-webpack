import React from 'react'
import Header from './header/header.js'
import Bar from './bar/bar.js'


let Second=React.createClass({
	render(){
		return (
              <div className="second">
                 <Header/>
                  <Bar/>
              </div>
			)
	}
});

export default Second;