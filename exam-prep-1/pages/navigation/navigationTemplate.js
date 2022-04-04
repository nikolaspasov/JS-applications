import { html } from './../../node_modules/lit-html/lit-html.js'
import navigationPage from './navigationPage.js';

export let navigationTemplate = (navigationPage) => html`
    <a href="/all-memes">All Memes</a>
    ${navigationPage.isLoggedIn
        ? loggedTemplate(navigationPage)
        : guestTemplate() }
`;

let loggedTemplate = (navigationPage) => html`
<div class="user">
    <a href="#">Create Meme</a>
    <div class="profile">
        <span>Welcome, ${navigationPage.email}</span>
        <a href="/profile">My Profile</a>
        <a href="" @click=${navigationPage.logoutHandler}>Logout</a>
    </div>
</div>
`;
let guestTemplate = () => html`
<div class="guest">
    <div class="profile">
        <a href="/login">Login</a>
        <a href="/register">Register</a>
    </div>
    <a class="active" href="/home">Home Page</a>
</div>
`;