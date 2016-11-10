import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
	/*
	constructor() {
		super();
		this.goToStore = this.goToStore.bind(this);
	}
	// Alternatively, use 'bind' method in the event handler, e.g. 'onSubmit'
	*/
	gotoStore(event){
		event.preventDefault();
		console.log('You changed the URL');
		// firstly, grab text from text input
		const storeId = this.storeInput.value;
		console.log(`Going to ${storeId}`);
		// secondly, transition from '/' to '/store/:storeId'
		this.context.router.transitionTo(`/store/${storeId}`);
	}
	render() {
		return (
			  <form className="store-selector" onSubmit={(e) => this.gotoStore(e)}> 
			  { /* <form className="store-selector" onSubmit={this.gotoStore.bind(this)}> */ }
				<h2>Please Enter A Store</h2>
				<input type="text" required placeholder="Store Name" defaultValue={getFunName()} ref={(input) => {this.storeInput = input} } />
				<button type="submit">Visit Store</button>
			</form>
		)
		//return <p>Hello</p>;
		//return React.createElement( 'p', {className: 'test'}, 'Hello again' );
	}
}

// Surface the router using `contextTypes`
StorePicker.contextTypes = {
	router: React.PropTypes.object
}

// Old way. Not ES6.
/*
var storePicker = React.createClass({
	goToStore() {
		console.log(this);
	},
	render() {
		return <p>hi</p>
	}
});
*/

export default StorePicker;