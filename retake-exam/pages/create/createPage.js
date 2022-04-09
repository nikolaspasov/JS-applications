import { createTemplate } from "./createTemplate.js";


let _router = undefined;
 let _renderHandler = undefined;
 let _gamesService = undefined;
 let errorMessages = [];
 let model = {};


function initialize(router, renderHandler, gamesService){
    _router=router;
    _renderHandler=renderHandler;
    _gamesService=gamesService;
}

async function submitHandler(event){

    event.preventDefault();

    try{
    errorMessages=[];
    let formData = new FormData(event.target);
    
    let title =  formData.get('title');
    let category= formData.get('category');
    let maxLevel = formData.get('maxLevel')
    let imageUrl = formData.get('imageUrl')
    let summary = formData.get('summary')

    if(title.trim()=== ''){
        errorMessages.push('Title is required')
    }
    if(category.trim()=== ''){
        errorMessages.push('Category is required')
    }
    if(maxLevel.trim()=== ''){
        errorMessages.push('Max Level is required')
    }
    if(imageUrl.trim()=== ''){
        errorMessages.push('Image Url is required')
    }
    if(summary.trim()=== ''){
        errorMessages.push('Summary is required')
    }
    if(errorMessages.length>0){
        let templateResult = createTemplate(model)
            alert(errorMessages.join('\n'));
            return _renderHandler(templateResult);

    }
    
    let newGame = {
        title,
        category,
        maxLevel,
        imageUrl,
        summary
    }

    await _gamesService.createItem(newGame);
    _router.redirect('/home')
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
    _renderHandler(templateResult);

    
    next();
}



export default{
    getView,
    initialize
}