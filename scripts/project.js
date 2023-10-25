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
			var option = document.createElement("option");
			option.value = "Pick a Hero"
			option.text = "Pick a Hero"
			leftDropdown.appendChild(option);
			leftOptions = await GetHeroes();
			leftOptions.forEach(item => {
				var option = document.createElement("option");
				option.value = item.id;  // Change this to the actual data field you want to use
				//console.log(item)
				option.text = item.name;   // Change this to the actual data field you want to display
				leftDropdown.appendChild(option);
			});
			break
		case "villian":
			var option = document.createElement("option");
			option.value = "Pick a Villian"
			option.text = "Pick a Villian"
			leftDropdown.appendChild(option);
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
			var option = document.createElement("option");
			option.value = "Pick a Hero"
			option.text = "Pick a Hero"
			rightDropdown.appendChild(option);
			rightOptions = await GetHeroes();
			//rightOptions = JSON.parse(response);
			rightOptions.forEach(item => {
				var option = document.createElement("option");
				option.value = item.id;  // Change this to the actual data field you want to use
				//console.log(item.key)
				option.text = item.name;   // Change this to the actual data field you want to display
				rightDropdown.appendChild(option);
			});
			break
		case "villian":
			var option = document.createElement("option");
			option.value = "Pick a Villian"
			option.text = "Pick a Villian"
			rightDropdown.appendChild(option);
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

function PopulateRight(){
	const rightCorner = document.getElementById('rightcorner');
	rightID = document.querySelector("#rightDropdown").value;
	console.log(rightID);
	//fighterRight = rightOptions[rightID];
	//console.log(fighterRight);
	//const filteredOptions = rightOptions.filter((item) => item.id === rightID);
	//console.log(filteredOptions);
	rightOptions.forEach(item => {
		if(item.id == rightID){
			//console.log(item);
			rightName = item.name;
			
			//console.log(rightName);
			//var rightPowerStats = [];
			//rightPowerStats = item.powerstats[combat];
			//rightPowerStats.forEach(stat => {
			rightCombat = item.powerstats.combat;
			rightDur = item.powerstats.durability;
			rightPow = item.powerstats.power;
			rightSpeed = item.powerstats.speed;
			rightStr = item.powerstats.strength;
			console.log(rightCombat)
			//})
			rightImages = item.images.sm;
			//rightSmImg = rightImages.sm;
			console.log(rightImages);
		}
	})
	
	//const fighterRight = rightOptions.filter((person) => person.id === rightID);
	//rightName = fighterRight.name;
	//console.log(rightName)
			//rightPowerStats = fighterRight.powerstats
			//rightPowerStats.forEach(stat => {
				//rightCombat = stat.combat
				//rightDur = stat.durability
				//rightPow = stat.power
				//rightSpeed = stat.speed
				//rightStr = stat.strength
			//})
			//rightImages = fighterRight.images
			//rhtImgUrl = rightImages.sm

	rightNameElement = document.createElement("h2");
	rightNameElement.

}

function PopulateLeft(){
	fighterLeft = document.querySelector("#leftDropdown")
}

function Fight(){
	alert('Fight Button Clicked!')
}

/* Event Listener */
document.querySelector("#leftHVDropdown").addEventListener("change", () => populateLeftDropdown());
document.querySelector("#rightHVDropdown").addEventListener("change", () => populateRightDropdown());
document.querySelector("#leftDropdown").addEventListener("change", () => PopulateLeft());
document.querySelector("#rightDropdown").addEventListener("change", () => PopulateRight());
document.querySelector("#fightButton").addEventListener("click", () => Fight());
