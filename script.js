class Card {
    constructor(color) {
        this.color = color;
    }
    getElement() {
        var element = document.createElement("div");
        element.style.backgroundColor = this.color;
        element.innerHTML = "‎ R";
        element.onclick = switchColor(this);
        return element;
    }
}

function switchColor(card) {
    var tmp = card.backgroundColor;
    var fro = "blue";
    card.backgroundColor = tmp;
    tmp = fro;
    fro = card;
}
// Color Pairs: red, blue, yellow, green, Orange, purple, Cyan, pink

function initialize() {
    for (let i = 0; i < 16; i++) {
        var newCard = new Card("red");
        document.getElementById("container").append(newCard.getElement());
    }
}





