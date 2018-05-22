import 'bulma/css/bulma.css';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import * as Redux from 'redux';
import App from './App';
import './index.css';
import Reducer from './reducers';
import registerServiceWorker from './registerServiceWorker';

const store = Redux.createStore(Reducer, {});

ReactDOM.render(
  <Provider store={store}><App /></Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
