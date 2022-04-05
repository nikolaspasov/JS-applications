import memesService from '../../services/memesService.js';
import { html } from './../../node_modules/lit-html/lit-html.js'

export let profileTemplate = (model) => html`
        <section id="user-profile-page" class="user-profile">
            <article class="user-info">
                <img id="user-avatar-url" alt="user-profile" src='/images/${model.gender}.png'>
                <div class="user-content">
                    <p>Username: ${model.username}</p>
                    <p>Email: ${model.email}</p>
                    <p>My memes count: ${model.userMemes.length}</p>
                </div>
            </article>
            <h1 id="user-listings-title">User Memes</h1>
            <div class="user-meme-listings">
                ${model.userMemes.length > 0
                    ? model.userMemes.map(meme => showMeme(meme))
                    : hasNoMemes()
                }
            </div>
        </section>
`;

let showMeme = (meme) => html`
<div class="user-meme">
    <p class="user-meme-title">${meme.title}</p>
    <img class="userProfileImage" alt="meme-img" src="${meme.imageUrl}">
    <a class="button" href="/details/${meme._id}">Details</a>
</div>
`;

let hasNoMemes = () => html`
    <p class="no-memes">No memes in database.</p>
`;