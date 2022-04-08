import { notificationsTemplate } from "./notificationsTemplate.js";


let _router = undefined;
let _renderHandler = undefined;

function initialize (router, renderHandler){
    _router = router;
    _renderHandler = renderHandler;

}


async function createNotification(message){

    let model = {
        message
    }

    let templateResult = notificationsTemplate(model);
    _renderHandler(templateResult);
}

export default{
    createNotification,
    initialize
}





// async function submitHandler(event){
//     event.preventDefault();
//     let formData = new FormData(event.target);

//     let user = {
//         email: formData.get('email'),
//         password: formData.get('password')
//     }
// }




