import { html } from "../../node_modules/lit-html/lit-html.js";

export let editTemplate = (model) => html`
<section id="edit-page" class="auth">
    <form id="edit" @submit = ${(e) => model.submitHandler(model.post._id,e)}>
        <h1 class="title">Edit Post</h1>

        <article class="input-group">
            <label for="title">Post Title</label>
            <input type="title" name="title" id="title" value="${model.post.title}">
        </article>

        <article class="input-group">
            <label for="description">Description of the needs </label>
            <input type="text" name="description" id="description" value="${model.post.description}">
        </article>

        <article class="input-group">
            <label for="imageUrl"> Needed materials image </label>
            <input type="text" name="imageUrl" id="imageUrl" value="${model.post.imageUrl}">
        </article>

        <article class="input-group">
            <label for="address">Address of the orphanage</label>
            <input type="text" name="address" id="address" value="${model.post.address}">
        </article>

        <article class="input-group">
            <label for="phone">Phone number of orphanage employee</label>
            <input type="text" name="phone" id="phone" value="${model.post.phone}">
        </article>

        <input type="submit" class="btn submit" value="Edit Post">
    </form>
</section>
`;