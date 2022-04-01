import jsonRequest from "../helpers/jsonRequest.js";

//CORRECT???
let baseUrl = 'http://localhost:3030/users'


function setUser(user){
    localStorage.setItem('user', JSON.stringify(user));
}

function getUser(){
    let userSearchResult = localStorage.getItem('user') === null
    ? undefined
    : JSON.parse(localStorage.getItem('user'));

    return userSearchResult;
}

async function login(user){
    let result = await jsonRequest(`${baseUrl}/login`, 'Post', user);
    setUser(result);
}
async function register(user){
    let result = await jsonRequest(`${baseUrl}/register`, 'Post', user);
    setUser(result);
}

