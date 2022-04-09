import {jsonRequest} from "../helpers/jsonRequest.js";

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
    console.log(user);
    let result = await jsonRequest(`${baseUrl}/login`, 'Post', user);
    console.log(result);
    setUser(result);
}
async function register(user){
    let result = await jsonRequest(`${baseUrl}/register`, 'Post', user);
    setUser(result);
}
async function logout(){
    await jsonRequest(`${baseUrl}/logout`, 'Get', undefined, true, true);
    localStorage.clear();
}


export default{
    login,
    register,
    setUser,
    getUser,
    logout
}
