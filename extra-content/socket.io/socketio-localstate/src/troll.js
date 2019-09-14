import React from 'react';

class Troll extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      words: '...',
    };
    this.props.socket.on('incoming', payload => {
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
    this.props.socket.emit('troll', this.state.text);
  };

  render() {
    return (
      <>
        <h2>{this.state.words}</h2>
        <form onSubmit={this.handleSubmit}>
          <input name="text" onChange={this.handleChangeText} />
        </form>
      </>
    );
  }
}

export default Troll;
