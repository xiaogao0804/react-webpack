import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import First from './components/first.js'
import Second from './components/second.js'
//import { createHistory, useBasename } from 'history'
/*
  const history = useBasename(createHistory)({
      basename: '/React-Router'
   });*/
                                                                                                                                                                                                                                                                                                                           

ReactDOM.render((	 
        <Router>
           <Switch>
 			 <Route path="/" component={First}></Route>
         	 <Route path="/second" component={Second}></Route>
           </Switch>
        </Router>),

	document.getElementById('root')
);
                                                                                    