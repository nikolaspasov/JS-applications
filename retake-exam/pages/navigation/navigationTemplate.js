import { html } from "../../node_modules/lit-html/lit-html.js";

export let navigationTemplate = () => html`
            <h1><a class="home" href="#">GamesPlay</a></h1>
            <nav>
                <a href="#">All games</a>
                <!-- Logged-in users -->
                
                <!-- Guest users -->
                
            </nav>
            `;

let loggedUserTemplate = () => html`
<div id="user">
    <a href="#">Create Game</a>
    <a href="#">Logout</a>
</div>
`;

let guestUserTemplate = () => html`
<div id="guest">
    <a href="#">Login</a>
    <a href="#">Register</a>
</div>
`;