import { detailsTemplate } from "./detailsTemplate.js";

let _router = undefined;
let _renderHandler = undefined;
let _carsService = undefined;


function initialize(router, renderHandler, carsService) {
    _router = router;
    _renderHandler = renderHandler;
    _carsService = carsService;
}

async function deleteHandler(id){

    try{
        await _carsService.deleteItem(id);
        _router.redirect('/car-listings');


    }catch(error){
        alert(error);
    }
}


async function getView(context) {

    let carId = context.params.id;
    let car = await _carsService.get(carId);
    
    let user = context.user;
    

    
    

    let model = {
        isOwner: user!==undefined && user._id === car._ownerId
        ? true
        : false,
        car,
        deleteHandler
    }

    let templateResult = detailsTemplate(model);
    _renderHandler(templateResult);
}


export default {
    getView, initialize
}