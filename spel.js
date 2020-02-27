console.log("js connected");

// document.removeChild(element)

// setug up game, make empty array, set all spans to base state.//
var grid = {};
var wantMove = {};
var clickedCell;
var messageDisplay = document.querySelector("#message");
var messagePlayer = document.querySelector("#player");
var computer = document.querySelector("#human");
var resetGame = document.getElementById("restart");
var setupGame = document.getElementById("setup");
var displaySecond = document.getElementById("displaySecond");
var cell = document.querySelectorAll("td");
var playerOneOnMove = true;
var name1;
var name2;
var score1 = 0;
var score2 = 0;
// allways on listeners for functions
resetGame.addEventListener("click", reset);
computer.addEventListener("click", toggleComputer);
setupGame.addEventListener("click", setId);


init();
function init() {
    //    setupGrid();
    spelGrid();
    reset();
}

function checkWin() {
    console.log(grid);
    if (grid.a1 === grid.a2 && grid.a2 === grid.a3 && grid.a1 != undefined && grid.a2 != undefined && grid.a3 != undefined ||
        grid.b1 === grid.b2 && grid.b2 === grid.b3 && grid.b1 != undefined && grid.b2 != undefined && grid.b3 != undefined ||
        grid.c1 === grid.c2 && grid.c2 === grid.c3 && grid.c1 != undefined && grid.c2 != undefined && grid.c3 != undefined ||

        grid.a1 === grid.b1 && grid.b1 === grid.c1 && grid.a1 != undefined && grid.b1 != undefined && grid.c1 != undefined ||
        grid.a2 === grid.b2 && grid.b2 === grid.c2 && grid.a2 != undefined && grid.b2 != undefined && grid.c2 != undefined ||
        grid.a3 === grid.b3 && grid.b3 === grid.c3 && grid.a3 != undefined && grid.b3 != undefined && grid.c3 != undefined ||

        grid.a1 === grid.b2 && grid.b2 === grid.c3 && grid.a1 != undefined && grid.b2 != undefined && grid.c3 != undefined ||
        grid.a3 === grid.b2 && grid.b2 === grid.c1 && grid.a3 != undefined && grid.b2 != undefined && grid.c1 != undefined
    ) {
        console.log("winnaar");
        if (playerOneOnMove) {
            alert("player O has won");
            ++score2;
            console.log(score2)
            var str = document.getElementById("ScoreName2")
            str.innerHTML = score2
            reset();
        } else {
            alert("player X has won");
            ++score1;
            console.log(score1)
            var str = document.getElementById("ScoreName1")
            str.innerHTML = score1
            reset();
        }
    } else {
        if (grid.a1 != undefined && grid.a2 != undefined && grid.a3 != undefined &&
            grid.b1 != undefined && grid.b2 != undefined && grid.b3 != undefined &&
            grid.c1 != undefined && grid.c2 != undefined && grid.c3 != undefined
        ) {
            alert("Remise, speel nogmaals!");
            reset();
        }
    }
}

function displayPlayer() {
    if (playerOneOnMove) {
        messagePlayer.textContent = "X";
    } else {
        messagePlayer.textContent = "O";
    }
}

// listeners and accepting clicks //
function spelGrid() {
    for (var i = 0; i < cell.length; i++) {
        //add click listeners to all cells
        cell[i].addEventListener("click", function () {
            //grab ID of clicked cell
            var clickedCell = this.id;
            console.log(clickedCell);
            //check if cell is empty 
            if (grid[clickedCell] === undefined) {
                if (playerOneOnMove) {
                    grid[clickedCell] = 1;
                    this.textContent = "X";
                } else {
                    grid[clickedCell] = 2;
                    this.textContent = "O";
                }
                playerOneOnMove = !playerOneOnMove;
                messageDisplay.textContent = "gezet";
                checkWin();
                displayPlayer();
            } else {
                this.style.background = "#99ffff";
                // setTimeout(() => {clearInterval(timerId); function(){cell[i].style.background = "#ffffff";}}, 100);
                messageDisplay.textContent = "klik op een leeg veld";
                alert("Dit veld is niet leeg! klik op een leeg veld");
                this.style.background = "#ffffff";
            }
        });
    }
}

// JS play game. location
function JSPlay() {
    // generate random coordinates
    // random a-c x
    var minx = 1;
    var maxx = 4;
    var randomnumx = Math.floor(Math.random() * (+maxx - +minx)) + +minx;
    var randomx = numToABC();
    function numToABC() {
        if (randomnumx === 1) { return "a"; }
        if (randomnumx === 2) { return "b"; }
        else { return "c"; }
    };
    // random 1-3 y
    var miny = 1;
    var maxy = 4;
    var randomy = Math.floor(Math.random() * (+maxy - +miny)) + +miny;
    var wantMove = "" + randomx + randomy;
    console.log(wantMove);
}
// document.write("Random Number Generated : " + random ); 

// JS move
function JSMove() {
    JSPlay();
    console.log(wantMove);
    tryMoveOnGrid(wantMove)
}

function tryMoveOnGrid() {
    (cell.id = wantMove)
    //grab ID of clicked cell
    if (grid[wantMove] === undefined) {
        if (playerOneOnMove) {
            grid[wantMove] = 1;
            this.textContent = "X";
        } else {
            grid[wantMove] = 2;
            this.textContent = "O";
        }
        playerOneOnMove = !playerOneOnMove;
        messageDisplay.textContent = "gezet";
        checkWin();
        displayPlayer();
    } else { JSPlay(); }
};


// 

//restart game//
function reset() {
    console.log("reset");
    grid = {};
    clearGrid();
}

function clearGrid() {
    for (var i = 0; i < cell.length; i++) {
        cell[i].textContent = "";
    }
}

// Setup ID

function setId() {
    console.log("setUp");
    toggleComputer;
    var name1 = document.getElementById("player1").value;
    var name2 = document.getElementById("player2").value;
    validateForm(name1);
    validateForm(name2);
    displayScore("DisplayName1", "met X: ", name1, "");
    displayScore("ScoreName1", score1, "", " punten");
    displayScore("DisplayName2", "met O: ", name2, "");
    displayScore("ScoreName2", score2, "", " punten");
}

function toggleComputer() {
    console.log("toggle");
    if (displaySecond.style.display == '')
        displaySecond.style.display = 'none';
    else
        displaySecond.style.display = '';
}

function validateForm(name) {
    if (name === "") {
        alert("Name must be filed");
    } else {
        console.log("name valid, welkom " + name);
    }
}

function displayScore(x, b, y, a) {
    var el = document.getElementById(x)
    el.innerHTML += b += y += a;
}



// freas setup, remove forms, state names.
// function setToJS() {
//     document.getElementById("player2").value = "JS Computer player";
// }


