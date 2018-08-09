import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './App'
import Characters from './components/Characters'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <React.Fragment>
        <App />
        <td>World</td>
        <Characters />
    </React.Fragment>
        , document.getElementById('root'));

registerServiceWorker();