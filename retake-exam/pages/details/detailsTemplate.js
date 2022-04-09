import { html } from "../../node_modules/lit-html/lit-html.js";



export let detailsTemplate = (model) => html`
<!--Details Page-->
<section id="game-details">
    <h1>Game Details</h1>
    <div class="info-section">

        <div class="game-header">
            <img class="game-img" src="${model.game.imageUrl}" />
            <h1>${model.game.title}</h1>
            <span class="levels">MaxLevel: ${model.game.maxLevel}</span>
            <p class="type">${model.game.category}</p>
        </div>

        <p class="text">
        ${model.game.summary}
        </p>

        ${model.isCreator
        ?creatorButtonsTemplate(model)
        : ''
        }

    </div>

</section>
`;

let creatorButtonsTemplate = (model) => html`
<div class="buttons">
    <a href="/edit/${model.game._id}" class="button">Edit</a>
    <a href="" @click = ${(e) => model.deleteHandler(model.game._id,e)} class="button">Delete</a>
</div>
`;