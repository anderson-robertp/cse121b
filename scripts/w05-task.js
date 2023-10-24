/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.querySelector('#temples');
var templeList = [];

/* async displayTemples Function */
const DisplayTemples = (_templeList) => {
    _templeList.forEach(element => {
        let templeName = element["templeName"];
        let templeLocation = element["location"];
        //let templeDedicate = element["dedicated"];
        //let templeArea = element["area"];
        let templeImage = element["imageUrl"];
        let article = document.createElement("article");
        var h3 = document.createElement("h3")
        h3.textContent = templeName;
        let img = document.createElement("img")
        img.setAttribute("src", templeImage);
        img.setAttribute("alt", templeLocation);
        article.appendChild(h3);
        article.appendChild(img);
        templesElement.appendChild(article);

        https://wireframe.cc/3txUn5
        
    });
}
/* async getTemples Function using fetch()*/
const getTemples = async() => {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json")
    if (response.ok){
        templeList = await response.json();
    }
    
    DisplayTemples(templeList);
}

/* reset Function */
const reset = () => {
    const element = document.getElementById("article");
    templesElement.innerHTML = "";
}


/* sortBy Function */
const sortBy = (temples) => {
    reset();
    filter = document.querySelector("#sortBy").value;
    switch (filter) {
        case "utah":
            let templeUtah = temples.filter(element => element["location"].includes("Utah"));
            DisplayTemples(templeUtah);
            break;
        case "notutah":
            let templeOther = temples.filter(element => !element["location"].includes("Utah"));
            DisplayTemples(templeOther);
            break;
        case "older":
            let date = "1950, January, 1"
            let templeOld = temples.filter(element => element["dedicated"] < date)
            DisplayTemples(templeOld);
            break;
        case "all":
            DisplayTemples(temples);
            break;
    };

    
}


//console.log(templeList);
getTemples();

/* Event Listener */
document.querySelector("#sortBy").addEventListener("change", () => sortBy(templeList));