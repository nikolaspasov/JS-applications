import { html } from './../../node_modules/lit-html/lit-html.js'
import navigationPage from './navigationPage.js';

export let navigationTemplate = (navigationPage) => html`
        
        <a class="active" href="/home">Home</a>
                <a href="/listings">All Listings</a>
                <a href="/by-year">By Year</a>
            ${navigationPage.isLoggedIn
                ? loggedTemplate(navigationPage)
                : guestTemplate()}    
`;

let loggedTemplate = () => html`
<div id="profile">
    <a>Welcome username</a>
    <a href="/my-listings">My Listings</a>
    <a href="/create-listing">Create Listing</a>
    <a href="/logout">Logout</a>
</div>
`;

let guestTemplate = () => html`
<div id="guest">
    <a href="/login">Login</a>
    <a href="/register">Register</a>
</div>
`;