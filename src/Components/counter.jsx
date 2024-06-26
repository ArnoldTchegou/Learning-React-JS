import React, { Component } from "react";
class Counter extends Component {
  state = {
    value: this.props.value,
  };

  styles = {
    fontSize: 30,
    fontWeight: "bold",
  };

  render() {
    const { counter, onIncrement, onDelete } = this.props;
    return (
      <React.Fragment>
        <h4>Item #{counter.id}</h4>
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          onClick={() => onIncrement(counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => onDelete(counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </React.Fragment>
    );
  }

  //rendering classes dynamically
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "secondary";
    return classes;
  }

  formatCount() {
    const { value: count } = this.props.counter;
    return count === 0 ? <h1>Zero</h1> : count;
  }
}
export default Counter;
