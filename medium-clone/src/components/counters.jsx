import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 2 },
      { id: 3, value: 3 },
      { id: 4, value: 0 }
    ]
  };

  handleDelete = counterId => {
    console.log("Test", counterId);
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  render() {
    return (
      <div>
        <button className="btn btn-primary btn-small m-2" onClick={handleReset}>
          Reset
        </button>
        {this.state.counters.map(c => (
          <Counter key={c.id} onDelete={this.handleDelete} counter={c} />
        ))}
      </div>
    );
  }
}

export default Counters;
