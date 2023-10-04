/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: 'Robert Anderson',
    photo: "images/picture.jpg",
    favoriteFoods: [
        'Pizza',
        'Sushi',
        'Ice Cream',
        'BBQ'
    ],
    hobbies: [
        'Dungeons and Dragons',
        'Magic: the Gathering',
        'Video Games'
    ],
    placesLived : [],
};



/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
        place: 'Louisiana, USA',
        length: '30 years'
    },
    {
        place: 'Alberta, Canada',
        length: '2 years'
    }
);



/* DOM Manipulation - Output */

/* Name */
document.querySelector('#name').innerHTML = myProfile.name;

/* Photo with attributes */
document.querySelector('#photo').setAttribute('src', myProfile.photo);
document.querySelector('#photo').setAttribute('alt', myProfile.name)

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
});


/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let li = document.createElement('li');
    li.textContent = hobby;
    document.querySelector('#hobbies').appendChild(li);
});

/* Places Lived DataList */
myProfile.placesLived.forEach(entry => {
    let dt = document.createElement('dt');
    let dd = document.createElement('dd');
    dt.textContent = entry.place;
    dd.textContent = entry.length;
    document.querySelector('#places-lived').appendChild(dt);
    document.querySelector('#places-lived').appendChild(dd);
})

