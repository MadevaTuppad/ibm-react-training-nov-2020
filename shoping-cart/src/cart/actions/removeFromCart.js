
import cartApi from '../../services/cartApi';
function removeFromCart(productId,cart, isRemove){
    return function(dispatch){
        let newCartDetails= cart.cartDetails
        const product = newCartDetails.find(product => product.productId === productId);
      console.log(product)
        //checks decreement or remove based condition
        if(!isRemove){
        if(product.productCount>1){
            newCartDetails[newCartDetails.indexOf(product)]={...product,productCount:product.productCount-1}
            console.log(newCartDetails)
  
        }else{
               newCartDetails=newCartDetails.filter(prod=>prod.productId!==productId);
           }
     }else{
        newCartDetails=newCartDetails.filter(prod=>prod.productId!==productId);
     }
       console.log (" after all update ",newCartDetails)
     const totalprodCount=newCartDetails.reduce( (res,prod)=>res+  (prod.productCount||0),0)

        const newCart={totalProductCount:totalprodCount,cartDetails:newCartDetails}
        cartApi
            .save(newCart)
            .then(newCart => {
                const action = { type: "REMOVE_FROM_CART", payload:newCart};
                dispatch(action);
            })
    };
    
}

export default removeFromCart;