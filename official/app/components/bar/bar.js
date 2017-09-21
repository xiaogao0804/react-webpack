import React from 'react'
import './bar.less'



let Bar=React.createClass({
    getInitialState(){
        return  {
            isShow:false,     //显示隐藏的自定义属性初始化为false，false为隐藏，true为显示
            value:this.props.arrBar[0]         //接收父组件传递过来的数据并初始化相应的值
        }
    },
    handleChange(ev){
        this.setState({
            isShow:!this.state.isShow,    //设置点击事件时，自定义属性的状态，点击一次，状态是上一次状态的反向状态
            value:ev.target.innerText       //获取触发的元素的值并更新state
        });
    },
	render(){
        var _this=this
        //console.log(this.props)    //查看父组件传递给子组件数据
		return (
           <div>
               <div className="barWrap clearfix" onClick={this.handleChange}>
                   <div className="bar1">{this.state.value}</div>
                   <i className="fa fa-angle-down fa-2x"></i>
               </div>
               <ul className={this.state.isShow?'barUl':'barUl '+'hide'}>
                {
               this.props.arrBar.map(function(item,i){
               	 console.log(item)
                 return <li onClick={_this.handleChange} key={i}>{item} <i className="fa fa-angle-down fa-2x"></i></li>   //li元素被function包裹，所以这里的this指向的不是组件，所以需要在外边保存一下this
                
                })
              }              
             </ul>
           </div>
		)
	}

});

export default Bar;