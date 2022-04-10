import { html } from "../../node_modules/lit-html/lit-html.js";

export let myPostsTemplate = (model) => html`
<section id="my-posts-page">
    <h1 class="title">My Posts</h1>

    <!-- Display a div with information about every post (if any)-->
    <div class="my-posts">
    ${model.userPosts.length>0
    ? model.userPosts.map(post => postTemplate(post))
    : noPostsTemplate()
    }

    </div>
    
    
</section>
`;

let noPostsTemplate = () => html`
<h1 class="title no-posts-title">You have no posts yet!</h1>
`;

let postTemplate = (post) => html`
<div class="post">
    <h2 class="post-title">${post.title}</h2>
    <img class="post-image" src="${post.imageUrl}" alt="Material Image">
    <div class="btn-wrapper">
        <a href="/details/${post._id}" class="details-btn btn">Details</a>
    </div>
</div>
`;