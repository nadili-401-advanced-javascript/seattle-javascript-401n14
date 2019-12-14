import React from 'react';

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.state.count = this.props.count ? this.props.count : 0;
    }

    add(e) {
        this.setState({ count: this.state.count + 1 });
    }

    subtract(e) {
        this.setState({ count: this.state.count - 1 });
    }

    render() {
        return (
            <div className='bordered-box'>
                <h2>
                    Your current count is: <span>{this.state.count}</span>
                </h2>

                <button id='subtract' onClick={this.subtract.bind(this)}>
                    Subtract
                </button>
                <button id='add' onClick={this.add.bind(this)}>
                    Add
                </button>
            </div>
        );
    }
}

export default Counter;
