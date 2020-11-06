import axios from "axios";

const endpoint = "http://localhost:3030/categories/";

function getAll(){
    return axios.get(endpoint)
        .then(response => response.data);
}



function save(catagoryData){
    if (catagoryData.id === 0){
        return axios.post(endpoint, catagoryData)
            .then(response => response.data);
    } else {
        return axios.put(`${endpoint}/${catagoryData.id}`, catagoryData)
            .then(response => response.data);
    }
}


export default {
    getAll,
    save,
   
};