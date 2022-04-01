import { homeTemplate } from "./homeTemplate.js";


let _router = undefined;
let _renderHandler = undefined;

function initialize (router, renderHandler){
    _router = router;
    _renderHandler = renderHandler;
}

async function getView(context){
    let templateResult = homeTemplate();
    _renderHandler(templateResult);
}
export default {
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




