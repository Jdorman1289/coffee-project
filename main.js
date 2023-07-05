"use strict"

function renderCoffee(coffee) {
    let html = '<div class="coffee">';
    html += '<h1>' + coffee.name + '</h1>';
    html += '<h2>' + coffee.roast + '</h2>';
    html += '</div>';

    return html;
}

function renderCoffees(coffees) {
    let html = '';
    for (let i = coffees.length - 1; i >= 0; i--) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    let selectedRoast = document.getElementById('roast-selection').value;
    let filteredCoffees = [];
    if (selectedRoast === 'all') {
        coffeeList.innerHTML = renderCoffees(coffees);
    } else {
        coffees.forEach(coffee => {
            if (coffee.roast === selectedRoast) {
                filteredCoffees.push(coffee);
            }
        });
        coffeeList.innerHTML = renderCoffees(filteredCoffees);
    }
}

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
let coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];

let coffeeList = document.getElementById('coffees');
let coffeeSearchInputBar = document.getElementById('coffeeSearchInputBar');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');


coffeeList.innerHTML = renderCoffees(coffees.reverse());

document.getElementById('roast-selection').addEventListener('input', updateCoffees);

coffeeSearchInputBar.addEventListener('input', () => {
    let filteredCoffees = [];
    coffees.forEach(coffee => {
        const coffeeName = coffee.name.toLowerCase();
        const searchValue = coffeeSearchInputBar.value.toLowerCase();
        if (coffeeName.includes(searchValue)) {
            filteredCoffees.push(coffee);
        }
    });
    coffeeList.innerHTML = renderCoffees(filteredCoffees);
});

document.getElementById('addCoffeeButton').addEventListener('click', () => {
    let addRoast = document.getElementById('addRoast').value;
    let addName = document.getElementById('addName').value;
    let newCoffee = {id: coffees.length+1, name:`${addName}`, roast: `${addRoast}`};
    coffees.push(newCoffee);
    coffeeList.innerHTML = renderCoffees (coffees);
})
