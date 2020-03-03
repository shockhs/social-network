import React from 'react';
import ReactDOM from 'react-dom'
import { render } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/redux-store';

test('renders learn react link', () => {
  const div = document.createElement('div');
  const getByText  =
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  ;
  ReactDOM.render(getByText,div);
  ReactDOM.unmountComponentAtNode(div);
});
