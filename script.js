class Card {
    constructor(color) {
        this.color = color;
    }
    getElement() {
        var element = document.createElement("div");
        element.style.backgroundColor = this.color;
        element.innerHTML = "‎ R";
        return element;
    }
}

// Color Pairs: red, blue, yellow, green, Orange, purple, Cyan, pink

function initialize() {
    for (let i = 0; i < 16; i++) {
        var newCard = new Card("red");
        document.getElementById("container").append(newCard.getElement());
    }
}


