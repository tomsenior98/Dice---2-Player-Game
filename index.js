let player1Total  = 0;
let player2Total  = 0;

function player1() {
    let player1Random = Math.floor(Math.random() * 6) + 1
    let image = document.getElementById("image1")
    console.log(player1Random)
    player1Total = player1Total + player1Random;
    document.getElementById("total-rolled").innerHTML = "Value Rolled: " +  player1Total;
    image.src = `images/dice${player1Random}.png`;
    checkIfWon(player1Total, player1Random)
}

function player2() {
    let player2Random = Math.floor(Math.random() * 6) + 1
    let image = document.getElementById("image2")
    console.log(player2Random)
    player2Total = player2Total + player2Random;
    document.getElementById("rolled").innerHTML = "Value Rolled: " +  player2Total;
    image.src = `images/dice${player2Random}.png`;
    checkIfWon(player2Total, player2Random)
}

function checkIfWon(total, random) {
    if(total <= 20 && random == 1) {
        console.log("You lost")
        number = 0;
    }
    else if(total >= 21) {
        console.log("You won")
        number = 0;
    }
}