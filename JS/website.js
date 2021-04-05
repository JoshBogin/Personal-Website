var background = document.getElementById("page");
var button = document.getElementById("button");

// maybe an interesting idea for the page would be to make items slowly generate one by one when someone gets to the page
// maybe also have text and items change from dark to light them when the colors are dark or light

// list of color schemes
var colorSchemes = [["purple", "#a07dff", "#6d38ff", "#4d2fa1"], ["green", "#90ff7d", "#38ff38", "#33a12f"], ["red", "#ff7d7d", "#ff3838", "#a12f2f"], ["blue", "#7d86ff", "#383bff", "#2f3aa1"], ["yellow", "#f6f459", "#e2d030", "#cace10"], ["orange", "#e6ae46", "#d8a123", "#cf950d"], ["pink", "#e646d9", "#d823b1", "#cf0db5"]];

// call func to generate starting background
generateBackground();

// random number function
function randNum(min, max) {
    var randNum = Math.floor(Math.random() * (max - min)) + min;
    console.log(randNum);
    return randNum;
}

// create random background for page start
function generateBackground() {
    // generate random colors for the background
    // get random number for color scheme
    var randomNum = randNum(0, colorSchemes.length);

    // get random color scheme from the list
    var scheme = colorSchemes[randomNum][0];
    var color1 = colorSchemes[randomNum][1];
    var color2 = colorSchemes[randomNum][2];
    var color3 = colorSchemes[randomNum][3];

    background.style["background"] = "radial-gradient(ellipse at center, #eeeeee, " + color1 + ", " + color2 + ", " + color3 + ", #3f3f3f)";
    console.log("generated ", scheme);
}

function changeBackground() {
    // generate random colors and then change the background colors when a button is clicked
    // also make it so the background starts as a random color 

    // generate random colors for the background
    // get random number for color scheme
    var randomNum = randNum(0, colorSchemes.length);

    // get random color scheme from the list
    var scheme = colorSchemes[randomNum][0];
    var color1 = colorSchemes[randomNum][1];
    var color2 = colorSchemes[randomNum][2];
    var color3 = colorSchemes[randomNum][3];

    background.style["background"] = "radial-gradient(ellipse at center,#eeeeee, " + color1 + ", " + color2 + ", " + color3 + ", #3f3f3f)";
    console.log("Changed to " + scheme + "!");
}


// get header text and change it when a logo is hovered over
var headerText = document.getElementById("headerText");

// Resume
function resumeHover() {
    headerText.innerHTML = "Resume";

    // change image color as well
    document.getElementById("resImg").src ="../Other/resume4-2.png";
}

// GitHub
function gitHubHover() {
    headerText.innerHTML = "GitHub";

    // change image color as well
    document.getElementById("gitImg").src = "../Other/github-logo-2.png";
}

// LinkedIn
function linkedInHover() {
    headerText.innerHTML = "LinkedIn";

    // change image color as well
    document.getElementById("lnImg").src = "../Other/linkedIn-2.png";
}

// Instagram
function instaHover() {
    headerText.innerHTML = "Instagram";

    // change image color as well
    document.getElementById("instaImg").src = "../Other/instagram-2.png";
}

// Reset the header text and the image colors when the logos are not being hovered anymore
function backToDefault() {
    headerText.innerHTML = "Joshua Bogin";

    document.getElementById("resImg").src = "../Other/resume4.png";
    document.getElementById("gitImg").src = "../Other/github-logo.png";
    document.getElementById("lnImg").src = "../Other/linkedIn.png";
    document.getElementById("instaImg").src = "../Other/instagram.png";
}