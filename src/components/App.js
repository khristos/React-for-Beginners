import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import Fish from './Fish';
import sampleFishes from '../sample-fishes';
import base from '../base';

class App extends React.Component {
	// Add component state
	constructor() {
		super();

		this.addFish = this.addFish.bind(this);
		this.loadSamples = this.loadSamples.bind(this);
		this.addToOrder = this.addToOrder.bind(this);

		// Get initial state
		this.state = {
			fishes: {},
			 order: {}
		};
	}

	//https://facebook.github.io/react/docs/react-component.html
	componentWillMount() {
		this.ref = base.syncState(`${this.props.params.storeId}/fishes`, {
			context: this,
			  state: 'fishes'
		});
	}

	componentWillUnMount() {
		base.removeBindings(this.ref);
	}

	addFish(fish) {
		// update state (using 'object spread')
		const fishes = {...this.state.fishes};
		// add new fish
		const timestamp = Date.now();
		fishes[`fish-${timestamp}`] = fish;
		//this.state.fishes.fish1 = fish;
		// set state
		this.setState({ fishes }); //shortcut
		//this.setState({ fishes: fishes });
	}

	loadSamples() {
		this.setState({
			fishes: sampleFishes
		});
	}

	addToOrder(key) {
		// take a copy of state (using 'object spread')
		const order = {...this.state.order};
		// update or add the new number of fish ordered
		order[key] = order[key] + 1 || 1;
		// update state
		//this.setState({ order: order });
		this.setState({ order });
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
								.map(key => <Fish key={key} index={key} details={this.state.fishes[key]} addToOrder={this.addToOrder} />)
						}
					</ul>
				</div>
				<Order fishes={this.state.fishes} order={this.state.order} />
				<Inventory addFish={this.addFish} loadSamples={this.loadSamples} />
			</div>
		)
	}
}

export default App;