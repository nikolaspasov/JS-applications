
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
        
    };
    
    if(body!== undefined){
        options.body=JSON.stringify(body);
    }

    let response = await fetch(url, options);
    if(!response.ok){
        let message = await response.text();
        throw new Error(`${response.status}: ${response.statusText}\n${message}`);
    }

    let result = undefined;
    if(!skipResult){
        result=await response.json();
    }

    return result;
}




