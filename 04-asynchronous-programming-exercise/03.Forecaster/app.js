let inputEl = document.querySelector('#location');
let submitButton = document.querySelector('#submit')
let code = '';

let conditions={
    'Sunny': '☀',
    'Partly sunny': '⛅',
    'Overcast': '☁',
    'Rain': '☂',
    'Degrees': '°'
}


function attachEvents() {
    submitButton.addEventListener('click', getCode);
    
    
}
function getCode() {

    fetch('http://localhost:3030/jsonstore/forecaster/locations')
        .then(response => response.json())
        .then(data => {
            let cityObject =
                data.find(o => o.name === inputEl.value);

            code = cityObject.code;
        return fetch('http://localhost:3030/jsonstore/forecaster/today/' + code )
        })
        .then(response => response.json())
        .then(data => {

            let forecastDiv = document.querySelector('#forecast')
            forecastDiv.style = 'display:block';
            let forecastsDiv = document.createElement('div')
            forecastsDiv.class = 'forecasts';
            let spanCondition = document.createElement('span')
            spanCondition.class = 'condition';

            let divCurrentForecast = document.createElement('div');

            let conditionSymbolSpan = document.createElement('span');
            //let conditionSpan = document.createElement('span');
            let forecastCitySpan = document.createElement('span');
            let forecastTempSpan = document.createElement('span');
            let forecastConditionSpan = document.createElement('span')


            conditionSymbolSpan.textContent = conditions[data.forecast.condition]
            forecastCitySpan.textContent = data.name;
            forecastTempSpan.textContent = data.forecast.low +' '+ data.forecast.high;
            forecastConditionSpan = data.forecast.condition;
            
          //  spanCondition.appendChild(conditionSpan);
            spanCondition.appendChild(forecastCitySpan);
            spanCondition.appendChild(forecastTempSpan);
            divCurrentForecast.appendChild(spanCondition);


            forecastsDiv.appendChild(spanCondition);
            forecastDiv.appendChild(forecastsDiv);
            
            console.log(forecastCitySpan);
            console.log(forecastTempSpan);
            console.log(forecastConditionSpan);
            forecastDiv.appendChild(conditionSymbolSpan)

        });    
        
    
   

}

{/* <div id="forecast" style="display:none">
            <div id="current">
                <div class="label">Current conditions</div>
            </div>
            <div id="upcoming">
                <div class="label">Three-day forecast</div>
            </div>
        </div> */}


attachEvents();