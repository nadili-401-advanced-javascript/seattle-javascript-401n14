import React from 'react';
import Counter from './Counter';
import Jumbotron from './Jumbotron';
import Dropdown from './Dropdown';

// Parent >> "smart"
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            count2: 0,
            items: ['Dog', 'Cat', 'Snake', 'All', 'None'],
        };
    }

    onChange(newCount) {
        this.setState({ count: newCount });
    }

    onChange2(newCount) {
        this.setState({ count2: newCount });
    }

    render() {
        return (
            <div className='container App'>
                <h1>Demo Application</h1>
                <Dropdown list={this.state.items} />
                <br />
                <Counter
                    count={this.state.count2}
                    onChange={this.onChange2.bind(this)}
                />
                <Counter
                    count={this.state.count}
                    onChange={this.onChange.bind(this)}
                />
                <input />
                <Jumbotron
                    message={
                        'I care about the first count: ' +
                        this.state.count2 +
                        ' and I care about the second one: ' +
                        this.state.count
                    }
                />
            </div>
        );
    }
}

export default App;
