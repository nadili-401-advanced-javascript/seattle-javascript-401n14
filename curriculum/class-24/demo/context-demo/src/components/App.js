import React from 'react';
import Child from './Child';

export const AppContext = React.createContext();

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
        };
    }

    changeName(e) {
        this.setState({ name: e.target.value });
    }

    render() {
        return (
            <AppContext.Provider value={this.state}>
                <div className='App'>
                    <h1>Enter Your Name:</h1>
                    <input
                        value={this.state.name}
                        onChange={this.changeName.bind(this)}
                    />

                    <h2>
                        Now, you should see this update my descendant consumers:
                    </h2>
                    <Child />
                </div>
            </AppContext.Provider>
        );
    }
}

export default App;
