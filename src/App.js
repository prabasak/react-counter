import React from 'react';
import './App.css';
import Counters from './components/counters';
import NavBar from './components/navbar';

class App extends React.Component {
  state = {
		counters: [
			{ id: 1, value: 0 },
			{ id: 2, value: 0 },
			{ id: 3, value: 0 },
			{ id: 4, value: 0 }
		]
	};

	handleDelete = counterId => {
		const counters = this.state.counters.filter(c => c.id !== counterId);
		this.setState({ counters });
	};

	handleResetAll = () => {
		const counters = this.state.counters.map(c => {
			c.value = 0;
			return c;
		});
		this.setState({ counters });
	};

	handleIncrement = counter => {
		const counters = [...this.state.counters],
			index = counters.indexOf(counter);
		counters[index] = { ...counter };
		counters[index].value += 1;
		this.setState({ counters });
	};

	handleDecrement = counter => {
		const counters = [...this.state.counters],
			index = counters.indexOf(counter);
		counters[index] = { ...counter };
		counters[index].value -= 1;
		this.setState({ counters });
	};

	handleReset = counter => {
		const counters = [...this.state.counters],
			index = counters.indexOf(counter);
		counters[index] = { ...counter };
		counters[index].value = 0;
		this.setState({ counters });
  };

  render() {
    return (
      <React.Fragment>
        <NavBar totalCounters={this.state.counters.filter(c => c.value > 0).length} />
        <main className="container">
          <Counters
            onResetAll={this.handleResetAll}
            onReset={this.handleReset}
						onIncrement={this.handleIncrement}
						onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
            counters={this.state.counters}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
