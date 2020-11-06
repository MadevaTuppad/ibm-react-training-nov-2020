import catagoriesApi from '../services/catagoriesApi';
import load from './load';
const categoryActionCreators = { 
    addNew(categoryName){
       

        return function(dispatch){
            const newCategoryData = { id : 0, name : categoryName};
            catagoriesApi
                .save(newCategoryData)
                .then(newCategory => {
                    const action = { type : 'ADD_CATEGORY', payload : newCategory };
                    dispatch(action);
                })
        };


    },
    setSelected(categoryData){
        return function(dispatch){
           
                    const action = { type : 'SET_SELECTED_CATEGORY', payload : categoryData};
                    dispatch(action);
              
        };

    }
}

export default {...categoryActionCreators, load};