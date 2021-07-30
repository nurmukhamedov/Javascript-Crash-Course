'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
const renderCountry = function(data, className = '') {
    const html = `
    <article class="country ${className}">
    <img class="country__img" src="${data.flag}" />
    <div class="country__data">
      <h3 class="country__name">${data.name}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)}</p>
      <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
      <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
    </div>
  </article>`;
    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
}
const renderError = function(msg) {
    countriesContainer.insertAdjacentHTML('beforeend', msg);
    countriesContainer.style.opacity = 1
};
const getJSON = function(url, errorMsg = 'Something went wrong') {
    return fetch(url).then(response => {
        if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);
        return response.json();
    });
};


// const getCounrtyNameandNeighbour = function(country) {
//     const request = new XMLHttpRequest();
//     request.open('GET', `https://restcountries.eu/rest/v2/name/${country}`);
//     request.send();

//     request.addEventListener('load', function() {

//         const [data] = JSON.parse(this.responseText);
//         console.log(data);
//         //render country 1
//         renderCountry(data);
//         const [neighbour] = data.borders;

//         if (!neighbour) return;

//         // Ajax call country 2
//         const request2 = new XMLHttpRequest();
//         request2.open('GET', `https://restcountries.eu/rest/v2/alpha/${neighbour}`);

//         request2.send();

//         request2.addEventListener('load', function() {
//             const data2 = JSON.parse(this.responseText);

//             renderCountry(data2, 'neighbour');
//         });


//     });
// };

// const getCountryData = function(country) {

//     // country 1 

//     getJSON(
//             `https://restcountries.eu/rest/v2/name/${country}`, 'Country not found')
//         .then(data => {
//             renderCountry(data[0])
//             const neighbour = data[0].borders[0];
//             // const neighbour = 'dsfcsc'


//             if (!neighbour) throw new Error('No neighbour found!');

//             // country 2 
//             return getJSON(`https://restcountries.eu/rest/v2/alpha/${neighbour}`, 'Country not found');
//         })
//         .then(data => renderCountry(data, 'neighbour'))
//         .catch(err => {
//             renderError(`something wen wrong ${err.message} try again`)
//         });
// };

// btn.addEventListener('click', function() {
//     getCountryData('portugal');
// })


/// #coding challange 1
const whereAmI = function(lat, lng) {
    fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
        .then(res => {
            if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
            return res.json();
        })
        .then(data => {
            console.log(data);
            console.log(`You are in ${data.city}, ${data.country}`);

            return fetch(`https://restcountries.eu/rest/v2/name/${data.country}`);
        })
        .then(res => {
            if (!res.ok) throw new Error(`Country not found (${res.status})`);

            return res.json();
        })
        .then(data => renderCountry(data[0]))
        .catch(err => console.error(`${err.message} 💥`));
};
whereAmI(52.508, 13.381);
whereAmI(19.037, 72.873);
whereAmI(-33.933, 18.474);
