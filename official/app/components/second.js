import React from 'react'
import Header from './header/header.js'
import Bar from './bar/bar.js'

//var arrBar=['全部','辣口味','不辣口味']

let Second=React.createClass({
    getInitialState(){
      return {
          arrBar:['全部','辣口味','不辣口味']    //给父组件设置初始值为父组件的数据
      }
    },
	render(){
		return (
              <div className="second">
                 <Header/>
                  <Bar arrBar={this.state.arrBar}/>      /*把需要传递的数据写在父组件上*/
              </div>
			)
	}
});

export default Second;