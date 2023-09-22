/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = 'Robert Anderson';
let currentYear = '2023';
let profilePicture = "images/picture.jpg";


/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
let imageElement = document.querySelector('img');


/* Step 4 - Adding Content */
nameElement.innerHTML =`<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `Profile image of ${fullName}`);


/* Step 5 - Array */
let favFoods = ['Pizza', 'Sushi', 'Nachos', 'BBQ'];
let otherFavFood = 'Mint Chocolate Chip Ice Cream';
foodElement.textContent = favFoods;
favFoods.push(otherFavFood);
foodElement.innerHTML += `<br>${favFoods}`;
favFoods.splice(0,1);
foodElement.innerHTML += `<br>${favFoods}`;
favFoods.splice(3,1)
foodElement.innerHTML += `<br>${favFoods}`;






