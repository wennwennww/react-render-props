import React from "react";

class ButtonMoveAction extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    }
    this.increaseCounter=this.increaseCounter.bind(this)
  }

  increaseCounter() {
    this.setState(
      prevState => ({
        counter: prevState.counter + 1
      })
    )
  }

  render() {
    return (
      <button className="button--accept" onMouseOut={() => this.increaseCounter()}>Mouse out count: {this.state.counter}</button>
    )
  }
}


export default ButtonMoveAction;