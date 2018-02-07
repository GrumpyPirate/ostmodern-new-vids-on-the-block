// React
import React from 'react';
import ReactDOM from 'react-dom';

// Redux
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import appReducers from './reducers'

// Components
import App from './components/App';

// Utils
import registerServiceWorker from './registerServiceWorker';

// Styles
import 'sanitize.css';
import './index.css';

// Bootstrap application
const store = createStore(appReducers);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
, document.getElementById('root'));

registerServiceWorker();
