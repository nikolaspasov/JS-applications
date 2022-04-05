import { editTemplate } from "./editTemplate.js";


let _router = undefined;
let _renderHandler = undefined;
let _memesService = undefined;
let _form = undefined;


function initialize(router, renderHandler, memesService) {
    _router = router;
    _renderHandler = renderHandler;
    _memesService = memesService
    
}

async function submitHandler(id,event) {
    event.preventDefault();

    try {
        let formData = new FormData(event.target);
        _form.errorMessages = [];

        let title = formData.get('title');
        if(title.trim() === ''){
            _form.errorMessages.push('Title is required')
        }
        
        let description = formData.get('description');
        if(description.trim() === ''){
            _form.errorMessages.push('Description is required')
        }

        let imageUrl = formData.get('imageUrl');
        if(imageUrl.trim() === ''){
            _form.errorMessages.push('Image Url is required')
        }
        
        if(_form.errorMessages.length > 0){
            let templateResult = editTemplate(_form);
            alert(_form.errorMessages.join('\n'));
            return _renderHandler(templateResult);
        }



        let meme = {
            title,
            description,
            imageUrl
        }

         await _memesService.updateItem(meme, id);
        _router.redirect(`/details/${id}`);
    }
    catch (error) {
        alert(error);
    }
}

async function getView(context) {

    let memeId = context.params.id;

    let meme = await _memesService.get(memeId);

    _form = {
        submitHandler,
        errorMessages: [],
        meme
    }

    let templateResult = editTemplate(_form);
    _renderHandler(templateResult);
}

export default {
    getView,
    initialize
}