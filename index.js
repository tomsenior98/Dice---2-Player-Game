let total  = 0;

function player1(number) {
    let player1Random = Math.floor(Math.random() * 6) + 1
    console.log(player1Random);
    total = total + player1Random;
    document.getElementById("Dice-1").innerHTML = "Value Rolled: " +  total;
    // console.log(player1Random);   
}
player1();