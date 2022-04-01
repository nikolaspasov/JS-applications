import { navigationTemplate } from "./navigationTemplate.js";


let _router = undefined;
let _renderHandler = undefined;

function initialize (router, renderHandler){
    let _router = router;
    let _renderHandler = renderHandler;
}

async function getView(context){
    let templateResult = navigationTemplate();
    _renderHandler(templateResult);
}

export default{
    getView,
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




