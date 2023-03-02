var roll_dice = function(){
    var playerOne = Math.floor(Math.random() * 6) + 1;
    var playerTwo = Math.floor(Math.random() * 6) + 1;

    document.querySelector("#player_one img").src="img/dice"+playerOne+".png";
    document.querySelector("#player_one img").alt="Dice="+playerOne;
    document.querySelector("#player_two img").src="img/dice"+playerTwo+".png";
    document.querySelector("#player_two img").alt="Dice="+playerTwo;

    var player_one_result_ele= document.querySelector("#player_one .player-result");
    var player_two_result_ele= document.querySelector("#player_two .player-result");

    if(player_one_result_ele.classList!=null){
        if(player_one_result_ele.classList.contains("tie")) player_one_result_ele.classList.remove("tie");
        else if(player_one_result_ele.classList.contains("won")) player_one_result_ele.classList.remove("won");
        else if(player_one_result_ele.classList.contains("lost")) player_one_result_ele.classList.remove("lost");
    }
    
    if(player_two_result_ele.classList!=null){
        if(player_two_result_ele.classList.contains("tie")) player_two_result_ele.classList.remove("tie");
        else if(player_two_result_ele.classList.contains("won")) player_two_result_ele.classList.remove("won");
        else if(player_two_result_ele.classList.contains("lost")) player_two_result_ele.classList.remove("lost");
    }

    if(playerOne==playerTwo){
        document.querySelector("#player_one h1").textContent="Tie!";
        document.querySelector("#player_two h1").textContent="Tie!";
        player_one_result_ele.classList.add("tie");
        player_two_result_ele.classList.add("tie");
    }else if(playerOne>playerTwo){
        document.querySelector("#player_one h1").textContent="WON!";
        document.querySelector("#player_two h1").textContent="Lost..";
        player_one_result_ele.classList.add("won");
        player_two_result_ele.classList.add("lost");
    }else{
        document.querySelector("#player_one h1").textContent="Lost..";
        document.querySelector("#player_two h1").textContent="WON!";
        player_one_result_ele.classList.add("lost");
        player_two_result_ele.classList.add("won");
    }
}

// when page is loaded, display players' dice results
window.onload=roll_dice;


