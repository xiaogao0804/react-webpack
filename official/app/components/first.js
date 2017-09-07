import React from 'react'
import ReactDOM from 'react-dom'
import Header from './header/header.js'
import Banner from './banner/banner.js'
import Title from './title/title.js'
import List from './imgList/imgList.js'
import Bottom from './bottom/bottom.js'

let arr1=[{src:'app/components/imgList/image/banner.jpg',name:'番茄拌面酱',price:'￥29.8'},
         {src:'app/components/imgList/image/banner.jpg',name:'番茄拌面酱',price:'￥29.8'},
         {src:'app/components/imgList/image/banner.jpg',name:'番茄拌面酱',price:'￥29.8'},
         {src:'app/components/imgList/image/banner.jpg',name:'番茄拌面酱',price:'￥29.8'}];

let arr2=[{src:'app/components/imgList/image/banner.jpg',name:'番茄拌面酱',price:'￥29.8'},
         {src:'app/components/imgList/image/banner.jpg',name:'番茄拌面酱',price:'￥29.8'}
        ];

let arr3=[{src:'app/components/imgList/image/banner.jpg',name:'番茄拌面酱',price:'￥29.8'},
         {src:'app/components/imgList/image/banner.jpg',name:'番茄拌面酱',price:'￥29.8'},
        ];

let First=React.createClass({
	render(){
		return (	
			<div className='first'>
		        <Header />
			    <Banner />
			    <Title name="明星系列"/>
			    <List arr={arr1}/>	
			    <Title name="经典系列"/>
			    <List arr={arr2}/>	
			    <Title name="全新系列"/>
			    <List arr={arr3}/>
			    <Bottom />			 	
			</div>

			)
	}
});

export default First;