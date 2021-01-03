import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../store/actions.js';

import useForm from '../hooks/useForm.js';

function Form({addStore}) {
    const defaults = {
        name: '',
        minCust: '',
        maxCust: '',
        avgSold: ''
    }

    const styles = {
        form: {
            display: 'flex'
        },
        div: {
            display: 'flex',
            alignItems: 'center',
            padding: '5px'
        },
        label: {
            margin: '5px'
        }
    }

    const { handleChange, handleSubmit, fields } = useForm(defaults);

    function submit(e) {
        e.preventDefault();
        handleSubmit(addStore);
        e.target.reset();
    }

    function change(e) {
        handleChange(e.target.id, e.target.value);
    }

    return (
        <form
            onSubmit={(e) => {
                submit(e);
        }}>
            <h2>Add a Store</h2>

            <div style={styles.div}>
                <label style={styles.label}>Store Location</label>
                <input
                    id='name'
                    name='name'
                    type='text'
                    onChange={change}
                    required />
            </div>

            <div style={styles.div}>
                <label style={styles.label}>Min Customers</label>
                <input
                    id='minCust'
                    name='minCust'
                    type='number'
                    onChange={change}
                    required />
            </div>

            <div style={styles.div}>
                <label style={styles.label}>Max Customers</label>
                <input
                    id='maxCust'
                    name='maxCust'
                    type='number'
                    onChange={change}
                    required />
            </div>

            <div style={styles.div}>
                <label style={styles.label}>Avg Cookies per Cust</label>
                <input
                    id='avgSold'
                    name='avgSold'
                    type='number'
                    onChange={change}
                    required /> 
            </div>

            <button
                type='submit'
                style={{
                    cursor: 'pointer',
                    padding: '10px',
                    margin: '20px 0 0 0',
                    width: '20%',
                    minWidth: '55px',
                    fontSize: '14px'
                    }}
                >
                Save
            </button>

        </form>
    )
}

const mapStateToProps = (state) => {
    return {
        initStores: state.store.initStores,
    }
}

const mapDispatchToProps = (dispatch, getState) => ({
    addStore: (data) => dispatch( actions.addStore(data) ),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
