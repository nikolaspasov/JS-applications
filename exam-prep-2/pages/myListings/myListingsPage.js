import { myListingsTemplate } from "./myListingsTemplate.js";

let _router = undefined;
let _renderHandler = undefined;
let _authService = undefined;
let _carsService = undefined;


function initialize(router, renderHandler, authService, carsService) {
    _router = router;
    _renderHandler = renderHandler;
    _authService = authService;
    _carsService = carsService;
}


async function getView(context){

    let userId = _authService.getUser()._id;
    console.log(userId);
    let userListings = await _carsService.getUserListings(userId);
    console.log(userListings);
    let model={
        cars: userListings
    }

    let templateResult = myListingsTemplate(model);
    _renderHandler(templateResult);
}


export default {
    getView, initialize
}
