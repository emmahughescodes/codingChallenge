import React, { Component } from 'react';
import './App.css';
import Receipt from "./Components/Receipt";

class App extends Component {
	constructor() {
		super();
			this.state = {
			totalExpense: 0,
			receiptCollection: [],
			receiptCount: 0,

		};
	}

	addReceipt = (e) => {
		this.setState({
			receiptCount: this.state.receiptCount + 1,
		});
	}

	render() {
		return (
			<div>
				<div className="total-expense">{this.state.totalExpense}</div>
				<div>{this.state.receiptCount}</div>
				<Receipt />
				<button onClick={this.addReceipt} disabled={ this.state.receiptCount > 4 }>Add Receipt</button>

			</div>
		)
	}

}

export default App;
