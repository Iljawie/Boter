console.log("js connected");
//restart game//
// document.removeChild(element)

// setug up game, make empty array, set all spans to base state.//
var grid = {};
var clickedCell;
var messageDisplay = document.querySelector("#message");
var messagePlayer = document.querySelector("#player");
var cell = document.querySelectorAll("td");
var playerOneOnMove = true;

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
        } else { alert("player X has won"); }
    } else {
        console.log("ik moet huilen");
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

// document.getElementsByTagName("td").addEventListener.onclick=function () { console.log(this) }; ///

// accept move? //

// Reset  //
function reset() {
    console.log("reset");
    grid = {};
}
// Object.keys(grid).forEach(key => grid[key]=null);
    // delete grid;
// grid.length = 0;
    // grid = 0;
    // grid = {};

    //pick a new random color from array
    // pickedColor = pickColor();
    //change colorDisplay to match picked Color
    // 	colorDisplay.textContent = pickedColor;
    // 	resetButton.textContent = "New Colors"
    // 	messageDisplay.textContent = "";
    // 	//change colors of squares
    // 	for(var i = 0; i < squares.length; i++){
    // 		if(colors[i]){
    // 			squares[i].style.display = "block"
    // 			squares[i].style.background = colors[i];
    // 		} else {
    // 			squares[i].style.display = "none";
    // 		}

// 	h1.style.background = "steelblue";
// }
// move