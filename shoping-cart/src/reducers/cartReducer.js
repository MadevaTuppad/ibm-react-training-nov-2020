const initialState = {
    totalProductCount: 0,
    cartDetails: []
};

function cartReducer(currentState = initialState, action) {
    switch (action.type) {
        case 'ADD_TO_CART':
        case 'REMOVE_FROM_CART':
        case 'INIT_CART':
            return action.payload;
        default:
            return currentState;
    }


}

export default cartReducer;