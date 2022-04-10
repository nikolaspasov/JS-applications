import { editTemplate } from "./editTemplate.js";


let _router = undefined;
 let _renderer = undefined;
 let _postsService = undefined;
 let model ={};
 let errorMessages=[];

 function initialize(router, renderer, postsService){
    _router=router;
    _renderer=renderer;
    _postsService=postsService;
}

async function submitHandler(id, event){

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
        let templateResult = editTemplate(model)
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

    await _postsService.updateItem(newPost, id);
    _router.redirect(`/details/${id}`)
}
catch(error){
    alert(error);
}
}


async function getView(context, next){

    let postId = context.params.id;
    let post = await _postsService.get(postId);

    model ={
        post,
        submitHandler
    }
    let templateResult = editTemplate(model);
    _renderer(templateResult);

    
    next();
}



export default{
    getView,
    initialize
}