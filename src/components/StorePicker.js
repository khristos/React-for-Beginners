import React from 'react';

class StorePicker extends React.Component {
	render() {
		return (
			<form className="store-selector">
				{ /* Comments */ }
				<h2>Please Enter A Store</h2>
				<input type="text" required placeholder="Store Name"/>
				<button type="submit">Visit Store></button>
			</form>
		)
		//return <p>Hello</p>;
		//return React.createElement( 'p', {className: 'test'}, 'Hello again' );
	}
}

export default StorePicker;