import React, { Component } from "react";

class Counter extends Component {
	// includes any data that the component requires
	// state = {
	// 	value: this.props.counter.value,
	// 	tags: ["tag1", "tag2", "tag3"]
	// };

	// Note: 'this.props' is a object property which returns the attributes declared in the component

	// constructor() {
	// 	// calling super() to refer the parent class, in this case 'Component' class
	// 	super();

	// 	// binding 'this' reference to the current object, i.e., 'Counter' object
	// 	this.handleIncrement = this.handleIncrement.bind(this);
	// }

	getBadgeClasses() {
		let classes = "badge m-2 badge-";
		classes += this.props.counter.value === 0 ? "warning" : "primary";
		return classes;
	}

	formatCount() {
		// getting the count value from state object and saving it in count variable using object destructuring
		const { value } = this.props.counter;
		return value === 0 ? "Zero" : value;
	}

	// renderTags() {
	// 	if (this.state.tags.length === 0) {
	// 		return <p>There are no tags!</p>;
	// 	}

	// 	return (
	// 		<ul>
	// 			{this.state.tags.map(tag => (
	// 				// 'key' attribute had to be added to make each list unique
	// 				<li key={tag}>{tag}</li>
	// 			))}
	// 		</ul>
	// 	);
	// }

	// handleIncrement = () => {
	// 	// in React, we have to call 'setState' function to let know that we are updating the state and it will figure out what part of the state is changed and based on that it will bring the DOM in sync to the virtual DOM
	// 	this.setState({ value: this.state.value + 1 });
	// };

	// passCounterValue = () => {
	// 	this.handleIncrement({ id: this.state.value + 1 });
	// 	console.log({ id: this.state.value + 1 });
	// };

	// resetCounter = () => {
	// 	// Note: Do not mutate the object directly. Always use 'setState'.
	// 	this.setState({ value: 0 });
	// };

	// <React.Fragment> to be used if an extra wrapping <div> is not required
	render() {
		return (
			<div className="counter">
				<h4>Counter #{this.props.counter.id}</h4>
				<span className={this.getBadgeClasses()}>{this.formatCount()}</span>
				<button
					className="btn btn-secondary btn-sm"
					onClick={() => this.props.onIncrement(this.props.counter)}
				>
					Increment
				</button>
				<button
					className="btn btn-secondary btn-sm m-2"
					onClick={() => this.props.onDecrement(this.props.counter)}
					disabled={this.props.counter.value === 0 ? "disabled" : ""}
				>
					Decrement
				</button>
				<button
					className="btn btn-outline-info btn-sm m-2"
					onClick={() => this.props.onReset(this.props.counter)}
				>
					Reset
				</button>
				<button
					type="button"
					className="btn btn-danger btn-sm m-2"
					onClick={() => this.props.onDelete(this.props.counter.id)}
				>
					Delete
				</button>
			</div>
		);
	}
}

export default Counter;

// Note: 'Props' contain data which is given to the component and 'State' contains the data that is local/private to the component. 'Props' is read-only where as 'State' can be mutated.
