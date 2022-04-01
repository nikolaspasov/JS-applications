import { render } from "./../node_modules/lit-html/lit-html.js";

export class LitRendered {

    constructor(){}

    createRenderHandler(domElement){

        return function (templateResult){
            render(templateResult, domElement);
        }
    }
}