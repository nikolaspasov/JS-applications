import { homeTemplate } from "./homeTemplate.js";


let _router = undefined;
 let _renderHandler = undefined;
 let _gamesService = undefined;


function initialize(router, renderHandler, gamesService){
    _router=router;
    _renderHandler=renderHandler;
    _gamesService=gamesService;
}

async function getView(context, next){

    let latestGames = await _gamesService.getLatestGames();
    console.log(latestGames);

    let model ={
        latestGames
    }
    let templateResult = homeTemplate(model);
    _renderHandler(templateResult);

    
    next();
}



export default{
    getView,
    initialize
}