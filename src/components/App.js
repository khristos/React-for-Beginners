import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import Fish from './Fish';
import sampleFishes from '../sample-fishes';

class App extends React.Component {
	// Add component state
	constructor() {
		super();

		this.addFish = this.addFish.bind(this);
		this.loadSamples = this.loadSamples.bind(this);

		// Get initial state
		this.state = {
			fishes: {},
			 order: {}
		};
	}

	addFish(fish) {
		//update state
		const fishes = {...this.state.fishes};
		//add new fish
		const timestamp = Date.now();
		fishes[`fish-${timestamp}`] = fish;
		//this.state.fishes.fish1 = fish;
		//set state
		this.setState({ fishes }); //shortcut
		//this.setState({ fishes: fishes });
	}

	loadSamples() {
		this.setState({
			fishes: sampleFishes
		});
	}

	render() {
		return (
			<div className="catch-of-the-day">
				<div className="menu">
					<Header tagline="Fresh Seafood Market" />
					<ul className="list-of-fishes">
						{
							Object
								.keys(this.state.fishes)
								.map(key => <Fish key={key} details={this.state.fishes[key]} />)
						}
					</ul>
				</div>
				<Order />
				<Inventory addFish={this.addFish} loadSamples={this.loadSamples} />
			</div>
		)
	}
}

export default App;