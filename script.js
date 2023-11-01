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
    
    for (let i = 0; i < 16; i++) {
        var newCard = new Card("white", colors[i], i);
        document.getElementById("container").append(newCard.createElement());
    }
}
// Color Pairs: red, blue, yellow, green, Orange, purple, Cyan, pink
var colors = ["red", "red", "blue", "blue", "yellow", "yellow", "green", "green", "orange", "orange", "purple", "purple", "cyan", "cyan", "pink", "pink"];
let divs = [null, null];
let clicks = 0;

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
    clicks++;
    if (card.style.backgroundColor != "white") {
        if (divs[0] == null ) {
            divs[0] = card;
        } else if (divs[0] == card){
        }
        else if (divs[1] == null) {
            divs[1] = card;
            tryMatch();
        }
    }
}
function calcScore() {
    let score = parseInt(document.getElementById("scoreNum").innerHTML);
    score += 1000/clicks;
    document.getElementById("scoreNum").innerHTML = score;
    clicks = 0;
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
        calcScore();
        checkWin();
    } else {
        var allDivs = document.querySelectorAll("#container > div");
        allDivs.forEach(div => {
            if (div.style.backgroundColor != "black") {
                div.setAttribute("onclick", " ");
            }  
        })
        setTimeout(() => {
            divs[1].style.backgroundColor = "white";
            divs[0].style.backgroundColor = "white";
        },1000);
    }
    setTimeout(() => {
        divs = [null, null];
        allDivs.forEach(div => {
            if (div.style.backgroundColor != "black") {
                div.setAttribute("onclick", "switchColor(this)");
            }  
        })
    },1000);
}

function checkWin() {
    var allDivs = document.querySelectorAll("#container > div");
    let done = true;
        allDivs.forEach(div => {
            if (div.style.backgroundColor == "white") {
                done = false;
                console.log(done);
            }  
        })
}



var popButton = document.getElementById("infoButton");
var popUp = document.getElementById("myBox");
var span = document.getElementsByClassName("close")[0];
popButton.onclick = function(){
    popUp.style.display = "none";
}
span.onclick = function(){
    popUpBox.style.display = "none";
}
window.onclick = function(event){
    if (event.target == popUp){
        modal.style.display = "none";
    }
}



