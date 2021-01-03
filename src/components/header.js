import React from 'react';
import { connect } from 'react-redux';


function Header(props) {
    return (
        <header className="App-header">
            <h1>SalmonCookies in React</h1>
            <h3
                style={{ 
                    border: '2px solid black',
                    display: 'inline-block',
                    backgroundColor: 'aliceblue',
                    padding: '10px'
                }}
            >{props.initStores.length} Stores</h3>
        </header>
    );
}

const mapStateToProps = (state) => {
    return {
        initStores: state.store.initStores,
    }
}


export default connect(mapStateToProps)(Header);