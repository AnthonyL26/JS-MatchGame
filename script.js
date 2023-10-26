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

var colors = ["red", "red", "blue", "blue", "yellow", "yellow", "green", "green", "orange", "orange", "purple", "purple", "cyan", "cyan", "pink", "pink"];

function switchColor(card) {
    console.log(1);
    var cardId = card.getAttribute("id")
     if (card.style.backgroundColor != colors[cardId]) {
        console.log(2);
        card.style.backgroundColor = colors[cardId];
    } else {
        card.style.backgroundColor = "white";
    }
}



// Color Pairs: red, blue, yellow, green, Orange, purple, Cyan, pink

function initialize() {
    gameDescription = document.getElementById("info");
    document.getElementById("info").style.display = "none";
    

    for (let i = 0; i < 16; i++) {
        var newCard = new Card("white", colors[i], i);
        document.getElementById("container").append(newCard.createElement());
    }
}

function toggleText(){
    
}






