// when page is loaded, display players' dice results
window.onload=function(){
    var playerOne = Math.floor(Math.random() * 6) + 1;
    var playerTwo = Math.floor(Math.random() * 6) + 1;

    document.querySelector("#player_one img").src="img/dice"+playerOne+".png";
    document.querySelector("#player_one img").alt="Dice "+playerOne;
    document.querySelector("#player_two img").src="img/dice"+playerTwo+".png";
    document.querySelector("#player_two img").alt="Dice "+playerTwo;
};