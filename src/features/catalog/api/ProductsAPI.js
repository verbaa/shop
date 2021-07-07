import axiosInstance from "../../../services/axios";



export function getProducts(){
    return axiosInstance.get('products')
}

export function get(id){
    return axiosInstance.get(`products/${id}`)
}


export function create({title = "Test title", body = "Test body"}) {
    return axiosInstance.post("/posts", {
        title, body
    })
}

export function remove(id){
    return axiosInstance.delete(`products/${id}`)
}