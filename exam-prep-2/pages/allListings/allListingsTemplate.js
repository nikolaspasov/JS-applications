import { html } from './../../node_modules/lit-html/lit-html.js'


export let allListingsTemplate = (model) => html `
<section id="car-listings">
<h1>Car Listings</h1>
<div class="listings">
    ${model.cars.length>0
    ? model.cars.map(car => carTemplate(car))
    : html `<p class="no-cars">No cars in database.</p>`
    }
</div>
</section>
`;

let carTemplate = (car) => html`
<div class="listing">
        <div class="preview">
            <img src="${car.imageUrl}">
        </div>
        <h2>${car.brand} ${car.model}</h2>
        <div class="info">
            <div class="data-info">
                <h3>Year: ${car.year}</h3>
                <h3>Price: ${car.price} $</h3>
            </div>
            <div class="data-buttons">
                <a href='/details/${car._id}' class="button-carDetails">Details</a>
            </div>
        </div>
    </div>
`;












let testTemplate = () => html `
    <div class="listing">
        <div class="preview">
            <img src="/images/audia3.jpg">
        </div>
        <h2>Audi A3</h2>
        <div class="info">
            <div class="data-info">
                <h3>Year: 2018</h3>
                <h3>Price: 25000 $</h3>
            </div>
            <div class="data-buttons">
                <a href="/" class="button-carDetails">Details</a>
            </div>
        </div>
    </div>

    <div class="listing">
        <div class="preview">
            <img src="/images/benz.jpg">
        </div>
        <h2>Mercedes A-class</h2>
        <div class="info">
            <div class="data-info">
                <h3>Year: 2016</h3>
                <h3>Price: 27000 $</h3>
            </div>
            <div class="data-buttons">
                <a href="#" class="button-carDetails">Details</a>
            </div>
        </div>
    </div>

    <div class="listing">
        <div class="preview">
            <img src="/images/bmw.jpg">
        </div>
        <h2>BMW 3 series</h2>
        <div class="info">
            <div class="data-info">
                <h3>Year: 2016</h3>
                <h3>Price: 22000 $</h3>
            </div>
            <div class="data-buttons">
                <a href="#" class="button-carDetails">Details</a>
            </div>
        </div>
    </div>

`;