
import { profileTemplate } from "./profileTemplate.js";

let _router = undefined;
let _renderHandler = undefined;
let _memesService = undefined;


function initialize(router, renderHandler, memesService) {
    _router = router;
    _renderHandler = renderHandler;
    _memesService = memesService;
}



async function getView(context) {

    let user = context.user;
    let username = user.username;
    let email = user.email;
    let gender = user.gender;
    let userMemes =[];

    if (user !== undefined) {
        userMemes = await _memesService.getUserMemes(user._id);
    }
    

    //let userMemes = await allMemes.filter(meme => meme._ownerId == user._id);
    

    let model = {
        user,
        email,
        username,
        gender,
        userMemes
    };

    let templateResult = profileTemplate(model);
    _renderHandler(templateResult);
}
export default {
    getView,
    initialize
}