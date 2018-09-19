import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import history from './components/partials/history';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Provider store={store}>
    <Router history={history}>
        <App />
    </Router>
</Provider>, 
document.getElementById('root'));
registerServiceWorker();
