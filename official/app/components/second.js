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
        console.log(this.state.taste)   //子组件传递过来的值，全部，辣口味，不辣口味
		return (
              <div className="second">
                  <Header/>
                  <Bar arrBar={this.state.arrBar} handleTaste={this.handleTaste}/>
                  {(this.state.taste=="辣口味")?<List arr={arr2}/>:(this.state.taste=="不辣口味")?<List arr={arr3}/>:<List arr={arr1}/>}  /*条件判断哪种口味显示哪种图片，js部分一定要用{}括起来*/
              </div>
			)
	}
});

export default Second;