import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import * as actions from '../store/actions.js';

import useSortData from '../hooks/useSortData.js';

import '../styles/table.css';

function StoreTable(props) {
    const { items, requestSort } = useSortData(props.initStores)

    useEffect( () => {
        actions.renderStores();
    }, [items, props.initStores]);

    let renderingArr = items ? items : props.initStores;

    let rows = renderingArr.map((store, idx) => {
        const { name, minCust, maxCust, avgSold } = store;
        return (
            <tr key={idx}>
                <td>{name}</td>
                <td>{minCust}</td>
                <td>{maxCust}</td>
                <td>{avgSold}</td>
            </tr>
        )
    })

    return (
        <table>
            <thead>
                <tr>
                    <th>
                        <button 
                            type='button'
                            onClick={() => { requestSort('name'); }}
                        >Location</button>
                    </th>
                    <th>
                        <button 
                            type='button'
                            onClick={() => { requestSort('minCust') }}
                        >Min/Cust</button>
                    </th>
                    <th>
                        <button 
                            type='button'
                            onClick={() => { requestSort('maxCust') }}
                        >Max/Cust</button>
                    </th>
                    <th>
                        <button 
                            type='button'
                            onClick={() => { requestSort('avgSold') }}
                        >Avg Cookie/Sale</button>
                    </th>
                </tr>
            </thead>
            <tbody>
                { rows }
            </tbody>
        </table>
    )
}

const mapStateToProps = (state) => {
    return {
        initStores: state.store.initStores,
    }
}

const mapDispatchToProps = (dispatch, getState) => ({
    renderStores: (data) => dispatch( actions.renderStores(data) ),
    addStore: (data) => dispatch( actions.addStore(data) ),
});


export default connect(mapStateToProps, mapDispatchToProps)(StoreTable);
