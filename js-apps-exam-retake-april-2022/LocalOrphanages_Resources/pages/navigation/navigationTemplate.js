import {html} from '../../node_modules/lit-html/lit-html.js'

export let navigationTemplate = (model) => html `
<h1><a href="/dashboard-page">Orphelp</a></h1>

<nav>
    <a href="/dashboard-page">Dashboard</a>

    ${model.isLoggedIn
    ? loggedUserTemplate(model)
    : guestUserTemplate()}
    
</nav>
`;

let loggedUserTemplate = (model) => html `
 <div id="user">
        <a href="/my-posts-page">My Posts</a>
        <a href="/create-page">Create Post</a>
        <a href="" @click = ${(e) => model.logoutHandler(e)}>Logout</a>
    </div>
`;
let guestUserTemplate = () => html `
 <div id="guest">
        <a href="/login">Login</a>
        <a href="/register">Register</a>
    </div>
`;