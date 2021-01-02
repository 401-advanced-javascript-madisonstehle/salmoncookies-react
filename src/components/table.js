import React from 'react';

import Rows from './rows.js';

function StoreTable() {
    return (
        <table>
            <thead>
                <th>Location</th>
                <th>Min/Cust</th>
                <th>Max/Cust</th>
                <th>Avg Cookie/Sale</th>
            </thead>
            <tbody>
                <Rows />
            </tbody>
        </table>
    )
}

export default StoreTable;