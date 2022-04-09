import gamesService from "../../services/gamesService.js";
import { detailsTemplate } from "./detailsTemplate.js";


let _router = undefined;
let _renderHandler = undefined;
let _authService = undefined;
let _gamesService= undefined;


function initialize(router, renderHandler, gamesService, authService) {
    _router = router;
    _renderHandler = renderHandler;
    _gamesService = gamesService;
    _authService = authService;
}

async function deleteHandler(id,event){
    event.preventDefault();
    await _gamesService.deleteItem(id);
    _router.redirect('/catalog-page')

}

async function getView(context, next) {

    let gameId = context.params.id;

    let game = await gamesService.get(gameId);
    let user = _authService.getUser();


    let model = {
        game,
        isCreator: user !== undefined && user._id === game._ownerId,
        deleteHandler,
    }
    let templateResult = detailsTemplate(model);
    _renderHandler(templateResult);


}



export default {
    getView,
    initialize
}