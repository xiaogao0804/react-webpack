import React from 'react'
import ReactDOM from 'react-dom'
import Header from './components/header/header.js'
import Banner from './components/banner/banner.js'
import Title from './components/title/title.js'

ReactDOM.render(
	<div className="contain" width="100%">
        <Header />
	    <Banner />
	    <Title />
	</div>,	
	document.getElementById('root')
);
