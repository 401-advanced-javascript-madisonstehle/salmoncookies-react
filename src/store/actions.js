// import axios from 'axios'

// ACTIONS THAT YOU WANT YOUR APPLICATION TO PERFORM CAN GO HERE AND CONNECT WITH THE REDUCERS TO DISPATCH.

// For Example
    // export const getCategories = () => async dispatch => {
        // let results = await axios.get('https://express-server-madisonstehle.herokuapp.com/api/v1/categories');
        // dispatch(renderCategories(results.data))
    // }

    // const renderCategories = payload => {
        // return {
            // type: 'GET_CATEGORIES',
            // payload
        // }
    // }

export const renderStores = payload => {
    return {
        type: 'GET_STORES',
        payload
    }
}

export const addStore = payload => {
    return {
        type: 'ADD_STORE',
        payload
    }
}

