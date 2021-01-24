import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import ErrorBoundary from './view/errorBoundary/errorBoundary'
import store from './redux/store';
import App from './App';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
