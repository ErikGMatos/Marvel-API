import React from 'react';
import ReactDOM from 'react-dom';
import 'materialize-css/dist/css/materialize.min.css';  
import App from './componentes/App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
