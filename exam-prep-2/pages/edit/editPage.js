import { editTemplate } from "./editTemplate.js";


let _router = undefined;
let _renderHandler = undefined;
let _carsService = undefined;
let _modelForTemplate = undefined


function initialize(router, renderHandler, carsService) {
    _router = router;
    _renderHandler = renderHandler;
    _carsService = carsService;

}

async function submitHandler(listingId, event){

    event.preventDefault();

    try{
        let formData = new FormData(event.target);
        _modelForTemplate.errorMessages=[];

        let brand = formData.get('brand');
        if(brand.trim() === ''){
            _modelForTemplate.errorMessages.push('Brand is required')
        }

        let model = formData.get('model')
        if(model.trim() === ''){
            _modelForTemplate.errorMessages.push('Model is required')
        }

        let description = formData.get('description')
        if(description.trim() === ''){
            _modelForTemplate.errorMessages.push('Description is required')
        }

        let year = formData.get('year')
        if(year.trim() === ''){
            _modelForTemplate.errorMessages.push('Year is required')
        }else if(year.trim()<=0){
            _modelForTemplate.errorMessages.push('Year must be a positive number')
        }

        let imageUrl = formData.get('imageUrl')
        if(imageUrl.trim() === ''){
            _modelForTemplate.errorMessages.push('Image Url is required')
        }

        let price = formData.get('price')
        if(price.trim() === ''){
            _modelForTemplate.errorMessages.push('Price is required')
        }else if(price.trim()<=0){
            _modelForTemplate.errorMessages.push('Price must be a positive number')
        }

        if(_modelForTemplate.errorMessages.length>0){
            let templateResult = editTemplate(_modelForTemplate)
            alert(_modelForTemplate.errorMessages.join('\n'));
            return _renderHandler(templateResult);
        }

        let updatedListing = {
            brand,
            model,
            description,
            year: Number(year),
            imageUrl,
            price: Number(price),
        }

        

        await _carsService.updateItem(updatedListing, listingId)
        _router.redirect(`/details/${listingId}`)
    }
    catch(error){
        alert(error);
    }
}


async function getView(context){

    let carId = context.params.id;
    let car = await _carsService.get(carId);
    
    _modelForTemplate={
        submitHandler,
        errorMessages: [],
        car
    }
    
    let templateResult = editTemplate(_modelForTemplate);
    _renderHandler(templateResult);
}


export default {
    getView, initialize
}