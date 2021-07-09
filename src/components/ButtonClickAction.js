import React from "react";

  class ButtonClickAction extends React.Component {
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
        <button className="button--cancel" onClick={() => this.increaseCounter()}>Btn clicks count: {this.state.counter}</button>
      )
    }
  }


export default ButtonClickAction;