window.addEventListener('load', showAllRecipies())

function showAllRecipies() {

    fetch('http://localhost:3030/jsonstore/cookbook/recipes')
        .then(res => res.json())
        .then(data => {

            let mainElement = document.querySelector("main")
            mainElement.textContent = '';
            
            Object.keys(data).forEach(recipe => {

                let titleDiv = document.createElement('div');
                titleDiv.classList = 'title';

                let titleElement = document.createElement('h2');
                titleElement.textContent = data[recipe].name;

                let photoDiv = document.createElement('div');
                photoDiv.classList = 'small';

                let imageElement = document.createElement('img');
                imageElement.src = data[recipe].img;

                titleDiv.appendChild(titleElement);

                photoDiv.appendChild(imageElement);

                let articleElement = document.createElement('article');
                articleElement.classList = 'preview';
                articleElement.id = data[recipe]._id
                articleElement.appendChild(titleDiv);
                articleElement.appendChild(photoDiv);

                articleElement.addEventListener('click', function() {getRecipe(data[recipe])});
                mainElement.appendChild(articleElement);
           });

            
            console.log(mainElement);

        })

}

function getRecipe(recipe){
let id = recipe._id;
    
    fetch('http://localhost:3030/jsonstore/cookbook/details/'+id) 
    .then(res=>res.json())
    .then(data=>{
        
        
        let articleElement = document.getElementById(id);
        console.log(articleElement);
        articleElement.textContent='';
        

                let titleElement = document.createElement('h2');
                titleElement.textContent = data.name;


                let bandDiv = document.createElement('div');
                bandDiv.classList='band';

                let thumbDiv = document.createElement('div');
                thumbDiv.classList='thumb';

                let imageElement = document.createElement('img');
                imageElement.src = data.img;

                let ingredientsDiv = document.createElement('div');
                ingredientsDiv.classList='ingredients';

                let ingredientsTitle = document.createElement('h3')
                ingredientsTitle.textContent='Ingredients:';

                let ingredientsUl = document.createElement('ul');
                
                data.ingredients.forEach(ingredient => {
                    let ingredientLi = document.createElement('li');
                    ingredientLi.textContent=ingredient;
                    ingredientsUl.appendChild(ingredientLi);
                });

                let descriptionDiv = document.createElement('div');
                descriptionDiv.classList='description';

                let preparationTitle = document.createElement('h3');
                preparationTitle.textContent='Preparation:';

                //append preparationTitle to descriptionDiv
                descriptionDiv.appendChild(preparationTitle);

                data.steps.forEach(step => {
                    let stepElement = document.createElement('p');
                    stepElement.textContent=step;

                    //append each step to the div
                    descriptionDiv.appendChild(stepElement);
                });



                //append elements to each other
                ingredientsDiv.appendChild(ingredientsTitle);
                ingredientsDiv.appendChild(ingredientsUl);

                thumbDiv.appendChild(imageElement);

                bandDiv.appendChild(thumbDiv);
                bandDiv.appendChild(ingredientsDiv);

            
                //append everything to the article
                articleElement.classList = 'preview';
                articleElement.id = data._id
                articleElement.appendChild(titleElement);
                articleElement.appendChild(bandDiv);
                articleElement.appendChild(descriptionDiv);

                articleElement.addEventListener('click', function() {getRecipe(data[recipe])});
                
    });
}
{/* <article>
            <div class="description">
                <h3>Preparation:</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius, quaerat.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur officia ipsam nulla vitae nobis
                    reprehenderit pariatur aut dolor exercitationem impedit.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus dolorem odit officiis numquam
                    corrupti? Quam.</p>
            </div>
</article> */}