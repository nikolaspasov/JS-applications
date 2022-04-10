import { html } from "../../node_modules/lit-html/lit-html.js";

export let detailsTemplate = (model) => html`
<section id="details-page">
    <h1 class="title">Post Details</h1>

    <div id="container">
        <div id="details">
            <div class="image-wrapper">
                <img src="${model.post.imageUrl}" alt="Material Image" class="post-image">
            </div>
            <div class="info">
                <h2 class="title post-title">${model.post.title}</h2>
                <p class="post-description">Description: ${model.post.description}</p>
                <p class="post-address">Address: ${model.post.address}</p>
                <p class="post-number">Phone number: ${model.post.phone}</p>
                <p class="donate-Item">Donate Materials: 0</p>

                ${model.isCreator
                ? creatorButtonsTemplate(model)
                : ''
                }
            </div>
        </div>
    </div>
</section>
`;

let creatorButtonsTemplate = (model) => html`
<div class="btns">
    <a href="/edit/${model.post._id}" class="edit-btn btn">Edit</a>
    <a href="" @click = ${(e) => model.deleteHandler(model.post._id,e)} class="delete-btn btn">Delete</a>
</div>
`;