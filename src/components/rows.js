import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import * as actions from '../store/actions.js';

function Rows(props) {

    useEffect( () => {
        console.log('useEffect!!!', props.initStores)
        actions.renderStores();
    });

    return props.initStores.map((store, idx) => {
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

export default connect(mapStateToProps, mapDispatchToProps)(Rows);
