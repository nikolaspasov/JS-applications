import { jsonRequest } from "../helpers/jsonRequest.js";

let baseUrl = 'http://localhost:3030/data/memes'

async function getAll(){
    let result = await jsonRequest(baseUrl);
    return result;
}

async function get(id){
    let result = await jsonRequest(`${baseUrl}/${id}`);
    return result;
}

async function createItem(newItem){
    //url, method, body, IsAuthorized (to create new item)
    let result = await jsonRequest(baseUrl, 'Post', newItem, true);
    return result;
}

async function updateItem(newItem, id){
    //url, method, body, IsAuthorized (to update item)
    let result = await jsonRequest(`${baseUrl}/${id}`, 'Put', newItem, true);
    return result;
}

async function deleteItem(id){
    //url, method, body, IsAuthorized (to delete item) 
    let result = await jsonRequest(`${baseUrl}/${id}`, 'Delete', undefined, true);
    return result;
}

export default{
    getAll,
    get,
    createItem,
    updateItem,
    deleteItem
}

