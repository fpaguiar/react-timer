import * as moment from 'moment';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import * as Redux from 'redux';
import App from './App';
import './index.css';
import Reducer from './reducers';
import registerServiceWorker from './registerServiceWorker';

const initialState: object  = {
  countValue: moment('00:00:00', 'HH:mm:ss')
};

/* tslint:disable */
const store = Redux.createStore(Reducer, initialState, window['__REDUX_DEVTOOLS_EXTENSION__'] && window['__REDUX_DEVTOOLS_EXTENSION__']());
/* tslint:enable */

ReactDOM.render(
  <Provider store={store}><App /></Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
