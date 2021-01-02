const initState = {
    initStores: [
        { name: "Seattle", minCust: 23, maxCust: 65, avgSold: 6.3 },
        { name: "Tokyo", minCust: 5, maxCust: 16, avgSold: 1.2 },
        { name: "Dubai", minCust: 11, maxCust: 38, avgSold: 3.7 },
        { name: "Paris", minCust: 20, maxCust: 38, avgSold: 2.3 },
        { name: "Lima", minCust: 2, maxCust: 16, avgSold: 4.7 },
      ]
}

const reducer = (state = initState, action) => {
    const newState = {...state}

    switch (action.type) {
        case 'GET_STORES':
            newState.initStores = action.payload;
            break;

        case 'ADD_STORE':
            newState.initStores = [...newState.initStores, action.payload];
            break;

        default:
            break;
    }


    return newState;
}

export default reducer;