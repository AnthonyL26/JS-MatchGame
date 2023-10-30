class Card {
    constructor(color, color2, id) {
        this.backColor = color;
        this.frontColor = color2;
        this.id = id;
    }
    createElement() {
        var element = document.createElement("div");
        element.style.backgroundColor = this.backColor;
        element.innerHTML = "‎";
        element.class = "Card";
        element.id = this.id;
        element.setAttribute("onclick", "switchColor(this)");
        return element;
    }
}

function initialize() {
    gameDescription = document.getElementById("info");
    document.getElementById("info").style.display = "none";
    

    for (let i = 0; i < 16; i++) {
        var newCard = new Card("white", colors[i], i);
        document.getElementById("container").append(newCard.createElement());
    }
}
// Color Pairs: red, blue, yellow, green, Orange, purple, Cyan, pink
var colors = ["red", "red", "blue", "blue", "yellow", "yellow", "green", "green", "orange", "orange", "purple", "purple", "cyan", "cyan", "pink", "pink"];
let divs = [null, null];

function switchColor(card) {
    let cardId = card.getAttribute("id")
    if (card.style.backgroundColor != colors[cardId]) {
        card.style.backgroundColor = colors[cardId];
    } else {
        card.style.backgroundColor = "white";
    }
    recordClick(card);
}

function recordClick(card) {
    if (divs[0] == null) {
        divs[0] = card;
    } else if (divs[1] == null) {
        divs[1] = card;
        tryMatch();
    }
}
function tryMatch() {
    let card1Id = divs[0].getAttribute("id")
    let card2Id = divs[1].getAttribute("id")
    if (divs[1].style.backgroundColor == divs[0].style.backgroundColor) {
        divs[0].style.backgroundColor = "black";
        divs[0].setAttribute("onclick", "")
        divs[1].style.backgroundColor = "black";
        divs[1].setAttribute("onclick", "")
        console.log(1);
    } else {
        setTimeout(function() {divs[0].style.backgroundColor ="white"}, 2000);
        setTimeout(function() {divs[1].style.backgroundColor ="white"}, 2000);
        console.log(colors[card1Id]);
    }
    divs = [null, null];
}

infoButton.addEventListener("click", function{myPopup.classList.add("show")});
closePopup.addEventListener("click", function(){ myPopup.classList.remove("show")});