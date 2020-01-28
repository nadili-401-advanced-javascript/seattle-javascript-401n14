import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import store from './store/store';
import { Provider } from 'react-redux';

ReactDOM.render(
    <Provider store={store}>
        <React.Fragment>
            <App />
        </React.Fragment>
    </Provider>,
    document.getElementById('root'),
);
