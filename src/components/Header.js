import React from 'react';

// Stateless Functional Component
const Header = (props) => {
	console.log(props); // $r.props.tagline; $0.classList
	return (
		<header className="top">
			<h1>
				Catch
				<span className="ofThe">
					<span className="of">of</span>
					<span className="the">the</span>
				</span>
				Day
			</h1>
			<h3 className="tagline"><span>{props.tagline}</span></h3>
			{ /* <p>Header</p> */ }
		</header>
	)
}

/*
function Header() { }
//	or
var Header = function
*/


/*class Header extends React.Component {
	render() {
		console.log(this); // $r.props.tagline; $0.classList
		return (
			<header className="top">
				<h1>
					Catch
					<span className="ofThe">
						<span className="of">of</span>
						<span className="the">the</span>
					</span>
					Day
				</h1>
				<h3 className="tagline"><span>{this.props.tagline}</span></h3>
			</header>
		)
	}
}*/

export default Header;