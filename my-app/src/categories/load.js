import catagoriesApi from '../services/catagoriesApi';

function load(){
    return function(dispatch){
        catagoriesApi
            .getAll()
            .then(function(cats){
                const catgories={categoryList:cats, selectedCategory:''}
                const action = { type: "INIT_CATS", payload: catgories };
                dispatch(action);
            });
    }
}

export default load;