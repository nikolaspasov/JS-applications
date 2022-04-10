import { myPostsTemplate } from "./myPostsTemplate.js";



let _router = undefined;
 let _renderer = undefined;
 let _postsService = undefined;
 let _authService = undefined;


function initialize(router, renderer, postsService, authService){
    _router=router;
    _renderer=renderer;
    _postsService=postsService;
    _authService = authService;
}

async function getView(context, next){

    let userId = _authService.getUser()._id;
    let userPosts = await _postsService.getUserPosts(userId);
    
    let model ={
       userPosts
    }
    let templateResult = myPostsTemplate(model);
    _renderer(templateResult);

}



export default{
    getView,
    initialize
}