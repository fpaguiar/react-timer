import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import * as Redux from 'redux';
import App from './App';
import './index.css';
import Reducer from './reducers';
import registerServiceWorker from './registerServiceWorker';

const initialState: object  = {
  countValue: 0
};

/* tslint:disable */
const store = Redux.createStore(Reducer, initialState, window['__REDUX_DEVTOOLS_EXTENSION__'] && window['__REDUX_DEVTOOLS_EXTENSION__']());
/* tslint:enable */

ReactDOM.render(
  <Provider store={store}><App /></Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
