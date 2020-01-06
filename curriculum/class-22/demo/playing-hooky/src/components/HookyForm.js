import React from 'react';

class HookyForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'John Doe',
            location: 'Ice Cream Shop',
        };
    }

    changeName(e) {
        this.setState({ ...this.state, name: e.target.value });
    }

    changeLocation(e) {
        this.setState({ ...this.state, location: e.target.value });
    }

    componentDidMount() {
        // runs after the first mount render
        document.title = this.state.name + ' is playing Hooky!';
    }

    componentDidUpdate() {
        // runs ** every ** render AFTER the first mount render
        console.log('updating document title');
        document.title = this.state.name + ' is playing Hooky!';
    }

    render() {
        return (
            <div>
                <h2>Your Name</h2>
                <label>
                    <span>First and Last Name</span>
                    <input
                        type='text'
                        value={this.state.name}
                        onChange={this.changeName.bind(this)}
                    />
                </label>
                <br />

                <label>
                    <span>Where are you going?</span>
                    <input
                        type='text'
                        value={this.state.location}
                        onChange={this.changeLocation.bind(this)}
                    />
                </label>
            </div>
        );
    }
}

export default HookyForm;
