import React from 'react';

// Child "dumb"
class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: this.props.count || 0,
        };
    }

    add() {
        if (this.props.onChange) this.props.onChange(this.state.count + 1);

        this.setState({ count: this.state.count + 1 });
    }

    subtract() {
        if (this.props.onChange) this.props.onChange(this.state.count - 1);

        this.setState({ count: this.state.count - 1 });
    }

    render() {
        return (
            <div className='bordered-box' id={this.props.id}>
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
