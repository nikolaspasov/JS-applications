
import authService from "../services/authService.js";


export async function jsonRequest(url, method, body, isAuthorized, skipResult){


    if(method === undefined){
        method = 'Get';
    }

    let headers = {};
    let options = {};

    //CHANGED THAT!!!
    if(method.toLowerCase() === 'post' || method.toLowerCase() === 'patch' ||
    method.toLowerCase() === 'put' ){

        headers['Content-Type'] = 'application/json';
    }

    if(isAuthorized){
        headers['X-Authorization'] = authService.getUser().accessToken;
    }


    options = {
        headers,
        method,
        body
    }
    
}




