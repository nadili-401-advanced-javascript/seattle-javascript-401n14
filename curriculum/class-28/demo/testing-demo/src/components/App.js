import React from 'react';
import Header from './Header';
import Search from './Search';
import Party from './Party';
import { BrowserRouter, Route } from 'react-router-dom';
import '../styles/styles.scss';

function App() {
    return (
        <div className='App'>
            <BrowserRouter>
                <Header />
                <Route exact path='/'>
                    <div className='container mt-5'>
                        <Search />
                    </div>
                </Route>

                <Route exact path='/party'>
                    <div className='container mt-5'>
                        <Party />
                    </div>
                </Route>
            </BrowserRouter>
        </div>
    );
}

export default App;
