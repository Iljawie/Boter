console.log("js connected");
//restart game//
// document.removeChild(element)

// setug up game, make empty array, set all spans to base state.//
var grid = {};
var clickedCell;
var messageDisplay = document.querySelector("#message");
var cell = document.querySelectorAll("td");
var playerOneOnMove = true;

init();
function init() {
    //    setupGrid();
    spelGrid();
    reset();
}

function checkWin() {
    if (grid[a1]==="1") {
        console.log("winnaar");
    } else { return;}
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
                    grid[clickedCell] ="1";
                    this.textContent = "X";
                } else {
                    grid[clickedCell] ="2";
                    this.textContent = "O";
                }
                playerOneOnMove = !playerOneOnMove;
                messageDisplay.textContent = "gezet";
                checkWin();
            } else {
                this.style.background = "#99ffff";
                messageDisplay.textContent = "klik op een leeg veld"
            }
        });
    }
}

// document.getElementsByTagName("td").addEventListener.onclick=function () { console.log(this) }; ///

// accept move? //

// Reset  //
function reset() {
Object.keys(grid).forEach(key => grid[key]=null);
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
}
// 	h1.style.background = "steelblue";
// }
// move