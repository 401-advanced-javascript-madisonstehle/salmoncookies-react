import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store.js';

import Table from './components/table.js';
import Form from './components/form.js';

function App() {
  return (
    <Provider store={store}>
      <header className="App-header">
        <h1>SalmonCookies in React</h1>
      </header>
      <Table />
      <Form />
    </Provider>
  );
}

export default App;
