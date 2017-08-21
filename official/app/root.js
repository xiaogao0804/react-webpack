import React from 'react'
import ReactDOM from 'react-dom'
import Header from './components/header/header.js'
import Banner from './components/banner/banner.js'
import Title from './components/title/title.js'
import List from './components/imgList/imgList.js'
import Bottom from './components/bottom/bottom.js'

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


ReactDOM.render(
	<div className="contain" width="100%">
        <Header />
	    <Banner />
	    <Title name="明星系列"/>
	    <List arr={arr1}/>	
	    <Title name="经典系列"/>
	    <List arr={arr2}/>	
	    <Title name="全新系列"/>
	    <List arr={arr3}/>
	    <Bottom />	
 	
	</div>,	
	document.getElementById('root')
);
