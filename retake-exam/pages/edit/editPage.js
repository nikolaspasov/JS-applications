import { editTemplate } from "./editTemplate.js";


let _router = undefined;
 let _renderHandler = undefined;
 let _gamesService = undefined;
 let model ={};
 let errorMessages=[];

 function initialize(router, renderHandler, gamesService){
    _router=router;
    _renderHandler=renderHandler;
    _gamesService=gamesService;
}

async function submitHandler(id,event){

    event.preventDefault();
    try{
    let formData = new FormData(event.target);
    errorMessages=[];
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
        let templateResult = editTemplate(model)
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
    
    await _gamesService.updateItem(newGame,id);
    _router.redirect(`/details/${id}`)
}
catch(error){
    alert(error);
}
}

async function getView(context, next){

    let gameId = context.params.id;
    let game = await _gamesService.get(gameId);
    console.log(game);

     model ={
        game,
        submitHandler
    }
    let templateResult = editTemplate(model);
    _renderHandler(templateResult);

    next();
}



export default{
    getView,
    initialize
}