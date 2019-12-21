import React from 'react';

class Sample extends React.Component {
    constructor(props) {
        console.log('Constructing!');
        super(props);
        this.state = {
            dummy: 0,
        };
    }

    componentWillMount() {
        console.log('Will Mount');
    }

    componentDidMount() {
        console.log('Did Mount');
        console.log('Props:', this.props.children);
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('Should update with state: ', nextState, '?');
        return true;
    }

    componentWillUpdate() {
        console.log('Will Update');
    }

    componentDidUpdate() {
        console.log('Updated!');
    }

    componentWillUnmount() {
        console.log('Will Unmount');
        console.log("I'm DYING!!");
    }

    update(e) {
        this.setState({ dummy: this.state.dummy + 1 });
    }

    render() {
        console.log('Rendering!');
        return (
            <div>
                <h1>This is my dummy var: {this.state.dummy}</h1>
                <button onClick={this.update.bind(this)}>
                    Update dummy var
                </button>
                {this.props.children}
            </div>
        );
    }
}

export default Sample;
