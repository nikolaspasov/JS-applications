import { catalogTemplate } from "./catalogTemplate.js";



let _router = undefined;
 let _renderHandler = undefined;
 let _gamesService = undefined;


function initialize(router, renderHandler, gamesService){
    _router=router;
    _renderHandler=renderHandler;
    _gamesService=gamesService;
}


async function getView(context, next){

    let allGames = await _gamesService.getAllGames();
    console.log(allGames);
    let model ={
        allGames
    }

    let templateResult = catalogTemplate(model);
    _renderHandler(templateResult);

}



export default{
    getView,
    initialize,
}