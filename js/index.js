const username_submit = (event) => {
    event.preventDefault();
    const username = document.getElementById("username").value;
    if (username.length>=5){
    }
    else{
        alert("Username must be at least 5 characters long.");
        return;
    } 
    //Success
    alert("You are ready!");
    document.getElementById("user").innerHTML = username;

    //Hide username box
    document.getElementById("username_div").style.display = "none";
    //Show game div
    document.getElementById("game_div").style.display = "block";
};
const start_game = (side) => {
  //Showing flipping div...
  document.getElementById("results").style.display = "none";
  document.getElementById("flipping").style.display = "block";
  setTimeout(() => {
    get_results(side);
    document.getElementById("flipping").style.display = "none";
    document.getElementById("results").style.display = "block";
  }, 1500);
  // alert(side);
};

const get_results = (side) =>{
    const coin_side = Math.floor(Math.random()*(2 - 1 + 1) + 1); //(max-min+1)+min
    let flipped_side = "1";
    if (coin_side===1) {
         flipped_side = "Head";
    }else{
        flipped_side = "Tail";
    }
    document.getElementById("results").innerHTML = "Coin was flipped and the result was: <h2>" + flipped_side + "</h2>";
    if (coin_side === 1){
          if (side === "head"){
            won();
          }
          else{
            lost();
          }
    }
    else{
         if (side === "tail") {
           won();
         } else {
           lost();
         }
    }
}

const won = () => {
    setTimeout(()=>{
        alert("You won!");
    }, 1000);
}

const lost = () => {
    setTimeout(() => {
        alert("You lost!");
    }, 1000);
}