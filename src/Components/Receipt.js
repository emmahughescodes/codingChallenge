import React, { Component } from "react";

class Receipt extends Component {
	state = {
		form: {
			description: "",
			amount: 0,
			currency: "",
		}
	}

	render() {
		return (
			<>
			<form action="">
				<input type="text" name="description" placeholder="description"/>
				<input type="text" name="amount" placeholder="amount"/>
				<input type="text" name="currency" placeholder="currency"/>
			</form>
			<button onClick={this.onSubmit}>Submit Receipt</button>
			</>
		)
	}
}

export default Receipt;
