/* Declare and initialize global variables */
const rightCorner = document.querySelector('#rightcorner');
const leftCorner = document.querySelector('#leftcorner');
const fightZone = document.querySelector('#fightzone');
var rightCornerList = [];
var leftCornerList = [];


/* Functions */
/* Fetch Heroes */
const urlHero = 'https://superhero-search.p.rapidapi.com/api/heroes';
const optionsHero = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '69e7e544dfmsh3e97c5a1c840adbp1bb34ajsn03bd247b6447',
		'X-RapidAPI-Host': 'superhero-search.p.rapidapi.com'
	}
};

try {
	const responseHero = await fetch(urlHero, optionsHero);
	const resultHero = await responseHero.text();
	console.log(resultHero);
} catch (error) {
	console.error(error);
}

/* Fetch Villians */
const urlVillian = 'https://superhero-search.p.rapidapi.com/api/villains';
const optionsVillian = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '69e7e544dfmsh3e97c5a1c840adbp1bb34ajsn03bd247b6447',
		'X-RapidAPI-Host': 'superhero-search.p.rapidapi.com'
	}
};

try {
	const responseVillian = await fetch(urlVillian, optionsVillian);
	const resultVillian = await responseVillian.text();
	console.log(resultVillian);
} catch (error) {
	console.error(error);
}

/* reset Function */
const reset = () => {
    const element = document.getElementById("article");
    templesElement.innerHTML = "";
}