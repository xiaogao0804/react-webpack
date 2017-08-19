import React from 'react'
import './bar.less'

const arrBar=['全部','辣口味','不辣口味'];

let Bar=React.createClass({
	render(){
		return (
           <div>
             <ul className="barUl">
             {
               arrBar.map(function(item,i){
               	console.log(item)
                 return <li key={i}>{item}</li>
                
               }) 
              }              
             </ul>
           </div>
		)
	}

});

export default Bar;