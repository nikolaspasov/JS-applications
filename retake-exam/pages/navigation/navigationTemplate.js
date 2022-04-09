import { html } from "../../node_modules/lit-html/lit-html.js";

export let navigationTemplate = (model) => html`
            <h1><a class="home" href="/home">GamesPlay</a></h1>
            <nav>
                <a href="/catalog-page">All games</a>
                
                ${model.isLoggedIn
                ? loggedUserTemplate(model)
                : guestUserTemplate() }
                
            </nav>
            `;

let loggedUserTemplate = (model) => html`
<div id="user">
    <a href="/create-page">Create Game</a>
    <a href=""  @click = ${(e) => model.logoutHandler(e)}>Logout</a>
</div>
`;

let guestUserTemplate = () => html`
<div id="guest">
    <a href="/login">Login</a>
    <a href="/register">Register</a>
</div>
`;