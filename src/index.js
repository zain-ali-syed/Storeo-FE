import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';


const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  store.subscribe(() => {
    localStorage.setItem('basket', JSON.stringify(store.getState().basket));
    // saveState({
    //   // authentication: store.getState().authentication,
    //   // user: store.getState().user,
    //   basket: store.getState().basket,
    //   // categories: store.getState().categories,
    //   // products: store.getState().products,
    // });
  });

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

