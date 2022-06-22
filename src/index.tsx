import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './styles/main.scss';
import App from './App';
import UserProvider from './context/UserProvider';
import { Provider } from 'react-redux';
import store from './store';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <UserProvider>
        <App />
      </UserProvider>
    </Provider>
  </React.StrictMode>
);
