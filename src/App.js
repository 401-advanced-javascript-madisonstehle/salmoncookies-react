import React, { useState } from 'react';
import { Provider } from 'react-redux';
import store from './store/store.js';

import Header from './components/header.js';
import Modal from './components/modal.js'
import Table from './components/table.js';
import Form from './components/form.js';

function App() {
  const [ modalStatus, setModalStatus ] = useState(false);

  return (
    <Provider store={store}>

      <Header />

        <button
          style={{
            position: 'absolute',
            margin: '10px 0px',
            top: '0.3rem',
            right: '0.5rem',
            fontSize: '18px',
            cursor: 'pointer',
            }}
          onClick={() => setModalStatus(true)}>
          +
        </button>

      { modalStatus && (<Modal 
        closeModal={() => setModalStatus(false)}>
        <Form />
      </Modal>)}

      <Table />

    </Provider>
  );
}


const mapStateToProps = (state) => {
  return {
      initStores: state.store.initStores,
  }
}

export default App;
