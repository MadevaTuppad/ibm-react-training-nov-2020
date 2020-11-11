import axios from "axios";

const endpoint = "http://localhost:3030/cart";

function get(){
    return axios.get(endpoint)
        .then(response => response.data);
}


function save(cart){
        return axios.post(endpoint, cart)
            .then(response => response.data);
    
}


export default {
    get,
    save,
   
};