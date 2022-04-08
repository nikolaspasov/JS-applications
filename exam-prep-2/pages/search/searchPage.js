import { searchTemplate } from "./searchTemplate.js"

let _router = undefined;
let _renderHandler = undefined;
let _carsService = undefined;
let _year = undefined;
let filteredCars = [];


function initialize(router, renderHandler, carsService) {
    _router = router;
    _renderHandler = renderHandler;
    _carsService = carsService;
}
async function submitHandler(year){
    _year = year;
    getView(_year)
}  

async function getView(context){

    _year !== undefined
    ? filteredCars = await _carsService.getCarsbyYear(_year)
    : filteredCars = [];
    
    let model ={
        submitHandler,
        filteredCars,
    }
    
    let templateResult = searchTemplate(model);
    _renderHandler(templateResult);
}


export default {
    getView, initialize
}
