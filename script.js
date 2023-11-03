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
    shuffle(colors);
    for (let i = 0; i < 16; i++) {
        var newCard = new Card("white", colors[i], i);
        document.getElementById("container").append(newCard.createElement());
    }
}

// Color Pairs: red, blue, yellow, green, Orange, purple, Cyan, pink
var colors = ["red", "red", "blue", "blue", "yellow", "yellow", "green", "green", "orange", "orange", "purple", "purple", "cyan", "cyan", "pink", "pink"];
let divs = [null, null];
let clicks = 0;

//Fisher-Yates (aka Knuth) Shuffle
function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex > 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

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
    if (card.style.backgroundColor != "white") {
        if (divs[0] == null ) {
            divs[0] = card;
        }
        else if (divs[1] == null) {
            divs[1] = card;
            tryMatch();
        }
        
    } else {
        if (divs[0] == card) {
            divs[0] = null;
        }
    }
}

function calcScore() {
    let score = parseInt(document.getElementById("scoreNum").innerHTML);
    score += 1000/clicks;
    document.getElementById("scoreNum").innerHTML = Math.ceil(score);
    clicks = 0;
}

function tryMatch() {
    clicks++;
    let card1Id = divs[0].getAttribute("id")
    let card2Id = divs[1].getAttribute("id")
    var allDivs = document.querySelectorAll("#container > div");
        allDivs.forEach(div => {
            if (div.style.backgroundColor != "black") {
                div.setAttribute("onclick", " ");
            }  
        })
    if (divs[1].style.backgroundColor == divs[0].style.backgroundColor) {
        setTimeout(() => {
            divs[0].style.backgroundColor = "black";
            divs[0].setAttribute("onclick", "")
            divs[1].style.backgroundColor = "black";
            divs[1].setAttribute("onclick", "")
            calcScore();
            checkWin();
        }, 1000)
    } else {
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
        }
    });
    if (done) {
        document.getElementById("container").innerHTML = "You Win!";
        document.getElementById("container").setAttribute("id", "win");
    }

}

function reset() {
    if (document.getElementById("win") != null) {
        document.getElementById("win").innerHTML = "";
        document.getElementById("win").setAttribute("id", "container");
    }
    document.getElementById("container").innerHTML = "";
    document.getElementById("scoreNum").innerHTML = 0;
    clicks = 0;
    divs = [null, null];
    initialize();
}

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}