import React from 'react';
import './App.css';
import Counters from './components/counters';
import NavBar from './components/navbar';

class App extends React.Component {
  state = {
		counters: [
			{ id: 1, value: 1 },
			{ id: 2, value: 2 },
			{ id: 3, value: 3 },
			{ id: 4, value: 4 }
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
            onDelete={this.handleDelete}
            counters={this.state.counters}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
