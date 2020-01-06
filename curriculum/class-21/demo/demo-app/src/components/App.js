import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import SamplePage from './pages/SamplePage';
import ListPage from './pages/ListPage';

class App extends React.Component {
    render() {
        return (
            <div className='App'>
                <h1>Test App</h1>
                <BrowserRouter>
                    <header>
                        <p>
                            <Link to='/'>Home</Link>
                        </p>
                        <p>
                            <Link to='/list'>List</Link>
                        </p>
                        <p>
                            <Link to='/sample'>Sample</Link>
                        </p>
                    </header>
                    <Route
                        path='/sample'
                        render={() => {
                            return <h2>Sample Component</h2>;
                        }}
                    />
                    <Route path='/sample' component={SamplePage} />

                    <Route exact path='/list' component={ListPage} />
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
