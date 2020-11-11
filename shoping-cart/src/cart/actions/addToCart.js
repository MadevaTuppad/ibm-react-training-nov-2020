import cartApi from '../../services/cartApi';

function addToCart(productId, cart){
console.log(cart)
    return function(dispatch){
        const {cartDetails} =cart
        console.log(cartDetails)

        const index = cartDetails.findIndex(product => product.productId === productId);
       console.log(index)
        if (index > -1) {
            console.log("if")
        cartDetails[index] ={...cartDetails[index],productCount:(cartDetails[index].productCount+1)}
        }
        else cartDetails.push({productId:productId,productCount:1});
       
        const totalprodCount=cartDetails.reduce( (res,prod)=>res+  (prod.productCount||0),0)
console.log(totalprodCount)
        const newCart={totalProductCount:totalprodCount,cartDetails:cartDetails}
        cartApi
            .save(newCart)
            .then(newCart => {
                const action = { type: "ADD_TO_CART", payload:newCart};
                dispatch(action);
            })
    };
   
    
}

export default addToCart;