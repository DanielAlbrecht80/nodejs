import React, { Component } from "react";

class Counter extends Component {
  styles = {
    fontSize: 20,
    fontWieght: "bold",
    width: 40,
    verticalAlign: "middle"
  };

  handleIncrement = () => {
    this.setState({ value: this.state.value + 1 });
  };

  handleDecrement = () => {
    if (this.state.value > 0) {
      this.setState({ value: this.state.value - 1 });
    }
  };

  render() {
    return (
      <div>
        <button
          className="btn btn-secondary btn-sm"
          onClick={this.handleDecrement}
        >
          -
        </button>
        <span className={this.getBadgeClasses()} style={this.styles}>
          {this.formatCount()}
        </span>
        <button
          className="btn btn-secondary btn-sm"
          onClick={this.handleIncrement}
        >
          +
        </button>
        <button
          className="btn btn-secondary btn-sm"
          onClick={() => this.props.onDelete(this.props.counter.id)}
        >
          Delete
        </button>
        <h4>Title</h4>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.state;
    return value === 0 ? "0" : value;
  }
}

export default Counter;
