import React from 'react'
import './imgList.less'

  
  function test(that){  
            var newArr = [];  
            for(var i = 0; i < that.props.arr.length; i++){  
                newArr.push(
                	<li key={i}>
                        <img src={that.props.arr[i].src} />
                        <p className="noodle-name">{that.props.arr[i].name}</p>
                        <p className="noodle-price">{that.props.arr[i].price}</p>
                	</li>
                	)  
            }  
            return newArr;  
        }  

let List=React.createClass({
	render(){
		//console.log(this.props)
		var that=this;
		return ( 
		  
             <ul className='img-list clearFix'>
               {
                 test(that)
               }
                
             </ul>
			)
	}
});

export default List;