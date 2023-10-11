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
    element.remove();
}


/* sortBy Function */
const sortBy = (temples) => {
    reset();
    filter = document.getElementById("#sortBy").nodeValue;
    switch (filter) {
        case "utah":
            templeList.filter((element) => element["location"] contains "Utah");
            break;
        case "notutah":
            
            break;
        case "older":
            
            break;
        case "all":
            
            break;
    
        default:
            break;
    }

    
}


console.log(templeList);
getTemples();

/* Event Listener */
