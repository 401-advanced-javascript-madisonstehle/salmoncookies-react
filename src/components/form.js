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

    const { handleChange, handleSubmit, fields } = useForm(defaults);

    function submit(e) {
        e.preventDefault();
        console.log('YOU SUBMITTED THE FORM!')
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
            <label>Store Location</label>
            <input
                id='name'
                name='name'
                type='text'
                onChange={change}
                required />

            <label>Min Customers</label>
            <input
                id='minCust'
                name='minCust'
                type='text'
                onChange={change}
                required />

            <label>Max Customers</label>
            <input
                id='maxCust'
                name='maxCust'
                type='text'
                onChange={change}
                required />

            <label>Avg Cookies per Cust</label>
            <input
                id='avgSold'
                name='avgSold'
                type='text'
                onChange={change}
                required /> 

            <button
                type='submit'>
                Submit
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
