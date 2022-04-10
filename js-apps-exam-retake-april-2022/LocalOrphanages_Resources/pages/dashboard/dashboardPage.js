import { dashboardTemplate } from "./dashboardTemplate.js";

let _router = undefined;
let _renderer = undefined;
let _postsService = undefined

function initialize (router, renderer, postsService){

    _router=router;
    _renderer= renderer;
    _postsService=postsService;

}


async function getView(context){

    let listOfPosts = await _postsService.getAll();
    

    let model = {
        listOfPosts
    }
    
    let templateResult = dashboardTemplate(model);
    _renderer(templateResult);
    
   
}


export default{
    getView,
    initialize
}