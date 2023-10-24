/* Declare and initialize global variables */
const rightCorner = document.querySelector('#rightcorner');
const leftCorner = document.querySelector('#leftcorner');
const fightZone = document.querySelector('#fightzone');
var rightCornerList = [];
var leftCornerList = [];
let leftOptions = [];
let rightOptions = [];



/* Functions */
/* Fetch Heroes */
async function GetHeroes(){
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
		//console.log(resultHero);
		const jsonArray = JSON.parse(resultHero);
		console.log(jsonArray);
		return jsonArray;
	} catch (error) {
		console.error(error);
	}
}


/* Fetch Villians */
async function GetVillians(){
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
		//console.log(resultVillian);
		const jsonArray = JSON.parse(resultVillian);
		console.log(jsonArray);
		return jsonArray;
	} catch (error) {
		console.error(error);
	}
}


/* reset Function */
const reset = (resetEl) => {
    const element = document.getElementById(resetEl);
    element.innerHTML = "";
}
async function populateLeftDropdown() {
	reset("leftDropdown")
	filter = document.querySelector("#leftHVDropdown").value;
	switch(filter){
		case "hero":
			leftOptions = await GetHeroes();
			leftOptions.forEach(item => {
				var option = document.createElement("option");
				option.value = item.id;  // Change this to the actual data field you want to use
				option.text = item.name;   // Change this to the actual data field you want to display
				leftDropdown.appendChild(option);
			});
			break
		case "villian":
			
			leftOptions = await GetVillians();
			leftOptions.forEach(item => {
				var option = document.createElement("option");
				option.value = item.id;  // Change this to the actual data field you want to use
				option.text = item.name;   // Change this to the actual data field you want to display
				leftDropdown.appendChild(option);
			});
			break
	}	
}
async function populateRightDropdown (){
	reset("rightDropdown")
	filter = document.querySelector("#rightHVDropdown").value;
	switch(filter){
		case "hero":
			rightOptions = await GetHeroes();
			//rightOptions = JSON.parse(response);
			rightOptions.forEach(item => {
				var option = document.createElement("option");
				option.value = item.id;  // Change this to the actual data field you want to use
				option.text = item.name;   // Change this to the actual data field you want to display
				rightDropdown.appendChild(option);
			});
			break
		case "villian":
			rightOptions = await GetVillians();
			//rightOptions = JSON.parse(response);
			rightOptions.forEach(item => {
				var option = document.createElement("option");
				option.value = item.id;  // Change this to the actual data field you want to use
				option.text = item.name;   // Change this to the actual data field you want to display
				rightDropdown.appendChild(option);
			});
			break
	}
}

/* Event Listener */
document.querySelector("#leftHVDropdown").addEventListener("change", () => populateLeftDropdown())
document.querySelector("#rightHVDropdown").addEventListener("change", () => populateRightDropdown())