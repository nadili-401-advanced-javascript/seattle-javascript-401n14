import React from 'react';

class TextEditor extends React.Component {
  constructor() {
    super();
    this.state = {
      text: '',
    };
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  render() {
    return (
      <div>
        <input
          onChange={this.handleChange.bind(this)}
          value={this.state.text}
        />

        <h1>Your new text is: {this.state.text}</h1>
      </div>
    );
  }
}

export default TextEditor;
