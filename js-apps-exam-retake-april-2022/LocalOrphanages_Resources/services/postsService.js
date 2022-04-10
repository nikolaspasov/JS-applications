import { jsonRequest } from "../helpers/jsonRequest.js";

let baseUrl = 'http://localhost:3030/data/posts'

async function get(id) {
    let result = await jsonRequest(`${baseUrl}/${id}`);
    return result;
}

async function getAll() {
    let urlLocation = '?sortBy=_createdOn%20desc';
    let result = await jsonRequest(`${baseUrl}${urlLocation}`);
    return result;
}
async function getUserPosts(userId) {
    let urlLocation = `?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`
    let result = await jsonRequest(`${baseUrl}${urlLocation}`);
    return result;
}

async function createItem(newItem) {
    //url, method, body, IsAuthorized (to create new item)
    let result = await jsonRequest(baseUrl, 'Post', newItem, true);
    return result;
}

async function updateItem(newItem, id) {
    //url, method, body, IsAuthorized (to update item)
    let result = await jsonRequest(`${baseUrl}/${id}`, 'Put', newItem, true);
    return result;
}

async function deleteItem(id) {
    //url, method, body, IsAuthorized (to delete item) 
    let result = await jsonRequest(`${baseUrl}/${id}`, 'Delete', undefined, true);
    return result;
}


export default {
    getAll,
    get,
    createItem,
    updateItem,
    deleteItem,
    getUserPosts,
    
}

