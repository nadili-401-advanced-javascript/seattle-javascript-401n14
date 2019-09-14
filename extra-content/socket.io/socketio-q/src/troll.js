import React from "react";

import Subscriber from "./lib/subscriber.js";
import Publisher from "./lib/publisher.js";

const Q = new Publisher();
const trollClient = new Subscriber("troll");

class Troll extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "",
      words: "..."
    };

    trollClient.subscribe("message", payload => {
      this.showWords(payload);
    });
  }

  showWords = words => {
    this.setState({ words });
  };

  handleChangeText = e => {
    this.setState({ text: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ words: this.state.text });
    Q.publish("troll", "message", this.state.text);
  };

  render() {
    return (
      <>
        <h2>{this.state.words}</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input name="text" onChange={this.handleChangeText} />
          </div>
        </form>
      </>
    );
  }
}

export default Troll;
