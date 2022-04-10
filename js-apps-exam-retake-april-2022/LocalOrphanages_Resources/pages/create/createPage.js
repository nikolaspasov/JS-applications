import { createTemplate } from "./createTemplate.js";


let _router = undefined;
 let _renderer = undefined;
 let _postsService = undefined;
 let errorMessages = [];
 let model = {};


function initialize(router, renderer, postsService){
    _router=router;
    _renderer=renderer;
    _postsService=postsService;
}

async function submitHandler(event){

    event.preventDefault();

    try{
    errorMessages=[];
    let formData = new FormData(event.target);
    
    let title =  formData.get('title');
    let description= formData.get('description');
    let imageUrl = formData.get('imageUrl')
    let address = formData.get('address')
    let phone = formData.get('phone')

    if(title.trim()=== ''){
        errorMessages.push('Title is required')
    }
    if(description.trim()=== ''){
        errorMessages.push('Description is required')
    }
    if(imageUrl.trim()=== ''){
        errorMessages.push('Image Url is required')
    }
    if(address.trim()=== ''){
        errorMessages.push('Address is required')
    }
    if(phone.trim()=== ''){
        errorMessages.push('Phone is required')
    }
    if(errorMessages.length>0){
        let templateResult = createTemplate(model)
            alert(errorMessages.join('\n'));
            return _renderer(templateResult);

    }
    
    let newPost = {
        title,
        description,
        imageUrl,
        address,
        phone
    }

    await _postsService.createItem(newPost);
    _router.redirect('/dashboard-page')
}
catch(error){
    alert(error);
}
}


async function getView(context, next){


    model ={
        submitHandler
    }
    let templateResult = createTemplate(model);
    _renderer(templateResult);

    
    next();
}



export default{
    getView,
    initialize
}