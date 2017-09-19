import React from 'react'
import './bar.less'

const arrBar=['全部','辣口味','不辣口味'];

let Bar=React.createClass({
    getInitialState(){
        return  {
            value:'全部',
            isShow:false     //显示隐藏的自定义属性初始化为false，false为隐藏，true为显示
        }
    },
    handleChange(){
        this.setState({
            isShow:!this.state.isShow     //设置点击事件时，自定义属性的状态，点击一次，状态是上一次状态的反向状态
        });
    },
	render(){
		return (
           <div>
               <div className="barWrap clearfix">
                   <div className="bar1" onClick={this.handleChange}>{this.state.value}</div>
                   <i className="fa fa-angle-down fa-2x"></i>
               </div>
               <ul className={this.state.isShow?'barUl':'barUl '+'hide'}>
                {
               arrBar.map(function(item,i){
               	 console.log(item)
                 return <li key={i}>{item} <i className="fa fa-angle-down fa-2x"></i></li>
                
                })
              }              
             </ul>
           </div>
		)
	}

});

export default Bar;