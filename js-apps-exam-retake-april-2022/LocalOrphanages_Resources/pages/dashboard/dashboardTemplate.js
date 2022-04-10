import { html } from "../../node_modules/lit-html/lit-html.js";

export let dashboardTemplate = (model) => html`
<section id="dashboard-page">
    <h1 class="title">All Posts</h1>

    
    <div class="all-posts">
        ${model.listOfPosts.length>0
        ? model.listOfPosts.map(post => postTemplate(post))
        : noPostsTemplate()
        }
    </div>


</section>
`;

let noPostsTemplate = () => html`
<h1 class="title no-posts-title">No posts yet!</h1>
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