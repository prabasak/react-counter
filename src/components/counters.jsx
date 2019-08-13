import React from "react";
import Counter from "./counter";

// Stateless Function Component
const Counters = ({ onResetAll, counters, onDelete, onIncrement, onDecrement, onReset }) => {
  // Note: to move the state up, the following piece of code has been moved up to it's parent componentso that NavBar component can have access to the state properties

  return (
    <div className="counter-list">
      <button
        type="button"
        className="btn btn-primary btn-sm m-2"
        onClick={onResetAll}
      >
        Reset All
      </button>
      {counters.map(counter => (
        <Counter
          key={counter.id}
          onDelete={onDelete}
          onIncrement={onIncrement}
          onDecrement={onDecrement}
          onReset={onReset}
          counter={counter}
        />
      ))}
    </div>
  );
}

export default Counters;

// Note: 'onDelete={this.props.onDelete}' we are raising the event 'onDelete' and bubbling up 'this.props.onDelete' event to it's parent component
// Using object destructuring eliminating the need to refer the props object