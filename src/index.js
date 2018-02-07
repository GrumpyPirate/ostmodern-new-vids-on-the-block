// React
import React from 'react';
import ReactDOM from 'react-dom';

// Components
import App from './components/App';

// Utils
import registerServiceWorker from './registerServiceWorker';

// Styles
import 'sanitize.css';
import './index.css';

// Bootstrap application
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
