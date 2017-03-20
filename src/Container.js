import React from 'react';
import { Provider } from 'react-redux';
import App from './components/App';
import store from './store';

export default function Container() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}
