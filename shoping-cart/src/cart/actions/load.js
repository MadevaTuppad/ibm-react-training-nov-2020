import cartApi from '../../services/cartApi';

function load(){
    return function(dispatch){
        cartApi
            .get()
            .then(function(cart){
                const action = { type: "INIT_CART", payload: cart };
                dispatch(action);
            });
    }
}

export default load;