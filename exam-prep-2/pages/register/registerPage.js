import { registerTemplate } from "./registerTemplate.js"

let _router = undefined;
let _renderHandler = undefined;
let _authService = undefined;
let _modelForTemplate= undefined;

function initialize(router, renderHandler, authService) {
    _router = router;
    _renderHandler = renderHandler;
    _authService = authService;
}

async function submitHandler(event){

    event.preventDefault();

    try{
        let formData = new FormData(event.target);
        _modelForTemplate.errorMessages = [];

        let username = formData.get('username');
        

        if(username.trim() === ''){
            _modelForTemplate.errorMessages.push('Email is required')

        }

        let password = formData.get('password')
        
        if(password.trim() === ''){
            _modelForTemplate.errorMessages.push('Password is required')

        }
        let repeatPassword = formData.get('repeatPass')
        console.log(repeatPassword);
        if(repeatPassword.trim() === ''){
            _modelForTemplate.errorMessages.push('Repeat password is required')

        }

        if(_modelForTemplate.errorMessages.length>0){
            let templateResult = registerTemplate(_modelForTemplate)
            alert(_modelForTemplate.errorMessages.join('\n'));
            return _renderHandler(templateResult);
        }

        let user = {
            username,
            password
        }

        await _authService.register(user)
        _router.redirect('/car-listings')
    }
    catch(error){
        alert(error);
    }
}


async function getView(context){

    _modelForTemplate = {
        submitHandler,
        //errorMessages: []
    }

    let templateResult = registerTemplate(_modelForTemplate);
    _renderHandler(templateResult);
}


export default {
    getView, initialize
}