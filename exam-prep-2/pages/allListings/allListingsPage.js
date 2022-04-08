import { allListingsTemplate } from "./allListingsTemplate.js";


let _router = undefined;
let _renderHandler = undefined;
let _carsService = undefined;


function initialize(router, renderHandler, carsService) {
    _router = router;
    _renderHandler = renderHandler;
    _carsService = carsService;
}


async function getView(context){

    let cars = await _carsService.getAllCars();
    console.log(cars);
    let model={
        cars
    }

    let templateResult = allListingsTemplate(model);
    _renderHandler(templateResult);
}


export default {
    getView, initialize
}