import { detailsTemplate } from "./detailsTemplate.js";


let _router = undefined;
let _renderer = undefined;
let _authService = undefined;
let _postsService = undefined;


function initialize(router, renderer, postsService, authService) {
    _router = router;
    _renderer = renderer;
    _postsService = postsService;
    _authService = authService;
}

async function deleteHandler(id, event) {
   event.preventDefault();
     let result =   await _postsService.deleteItem(id);
     
        _router.redirect('/dashboard-page')
    

}

async function getView(context, next) {

    let postId = context.params.id;

    let post = await _postsService.get(postId);
    let user = _authService.getUser();


    let model = {
        post,
        isCreator: user !== undefined && user._id === post._ownerId,
        deleteHandler,
    }
    let templateResult = detailsTemplate(model);
    _renderer(templateResult);


}



export default {
    getView,
    initialize
}