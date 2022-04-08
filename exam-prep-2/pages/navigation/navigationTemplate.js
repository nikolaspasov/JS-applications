import { html } from './../../node_modules/lit-html/lit-html.js'

export let navigationTemplate = (model) => html`
        
        <a class="active" href="/home">Home</a>
                <a href="/car-listings">All Listings</a>
                <a href="/by-year">By Year</a>
            ${model.isLoggedIn
                ? loggedTemplate(model)
                : guestTemplate()}    
`;

let loggedTemplate = (model) => html`
<div id="profile">
    <a>Welcome ${model.username}</a>
    <a href="/my-listings">My Listings</a>
    <a href="/create-listing">Create Listing</a>
    <a @click = ${model.logoutHandler} href="">Logout</a>
</div>
`;

let guestTemplate = () => html`
<div id="guest">
    <a href="/login">Login</a>
    <a href="/register">Register</a>
</div>
`;