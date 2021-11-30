import ReactDOM from 'react-dom';
import { Router } from 'react-router';
import { compose } from 'redux';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import './index.css';
import { App } from './App';
import {Login} from './components/Login';
import configureStore from './store/configureStore';

// import reportWebVitals from './reportWebVitals';

const history = createBrowserHistory();
declare global {

}
declare global {
  interface Window {
    devToolsExtension?: typeof compose;
    initialReduxState: any;
  }
}

window.initialReduxState = window.initialReduxState || {};
const initialState = window.initialReduxState;
const store = configureStore(history, initialState);


ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  <Provider store={store}>
    <Router history={ history}>
      <App />
      <Login/>
    </Router>
  </Provider>,
  document.getElementById('root')
);

// reportWebVitals();
