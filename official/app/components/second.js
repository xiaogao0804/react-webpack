import React from 'react'
import Header from './header/header.js'
import Bar from './bar/bar.js'
import List from './imgList/imgList'

//var arrBar=['全部','辣口味','不辣口味']

let arr1=[{src:'app/components/imgList/image/banner.jpg',name:'番茄拌面酱',price:'￥29.8'},
    {src:'app/components/imgList/image/banner.jpg',name:'番茄拌面酱',price:'￥29.8'},
    {src:'app/components/imgList/image/banner.jpg',name:'番茄拌面酱',price:'￥29.8'},
    {src:'app/components/imgList/image/banner.jpg',name:'番茄拌面酱',price:'￥29.8'},
    {src:'app/components/imgList/image/banner.jpg',name:'番茄拌面酱',price:'￥29.8'},
    {src:'app/components/imgList/image/banner.jpg',name:'番茄拌面酱',price:'￥29.8'},
    {src:'app/components/imgList/image/banner.jpg',name:'番茄拌面酱',price:'￥29.8'},
    {src:'app/components/imgList/image/banner.jpg',name:'番茄拌面酱',price:'￥29.8'}
    ];

let arr2=[{src:'app/components/imgList/image/banner.jpg',name:'番茄拌面酱',price:'￥29.8'},
    {src:'app/components/imgList/image/banner.jpg',name:'番茄拌面酱',price:'￥29.8'},
    {src:'app/components/imgList/image/banner.jpg',name:'番茄拌面酱',price:'￥29.8'}
];

let arr3=[{src:'app/components/imgList/image/banner.jpg',name:'番茄拌面酱',price:'￥29.8'},
          {src:'app/components/imgList/image/banner.jpg',name:'番茄拌面酱',price:'￥29.8'},
];

let Second=React.createClass({
    getInitialState(){
      return {
          arrBar:['全部','辣口味','不辣口味'],    //给父组件设置初始值为父组件的数据
          taste:""
      }
    },
    handleTaste(val){           //子组件调用的方法
        this.setState({
            taste:val
        })
    },
	render(){
        console.log(this.state.taste)   //子组件传递过来的值
		return (
              <div className="second">
                  <Header/>
                  <Bar arrBar={this.state.arrBar} handleTaste={this.handleTaste}/>  /*将父组件方法以属性的形式写子组将上，供子组件调用，和子组件调用父组件的数据和属性一个方法*/
                  <List arr={arr2}/>
              </div>
			)
	}
});

export default Second;