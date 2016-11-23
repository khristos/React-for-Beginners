// let's go!
import React from 'react';
import { render } from 'react-dom';
//import ReactDOM from 'react-dom';
import { BrowserRouter, Match, Miss } from 'react-router';

import './css/style.css'

import App from './components/App';
import StorePicker from './components/StorePicker';
import NotFound from './components/NotFound';

//Stateless Functional Component
const Root = () => {
	return (
		<BrowserRouter>
			<div>
				<Match exactly pattern="/" component={StorePicker} />
				<Match pattern="/store/:storeId" component={App} />
				<Miss component={NotFound} />
			</div>
		</BrowserRouter>
	)
}

//3 State Management Objects - props, state, context (top-level, global)

render( <Root/>, document.querySelector('#main') );
//render( <App/>, document.querySelector('#main') );
//render( <StorePicker/>, document.querySelector('#main') );
//ReactDOM.render(){}