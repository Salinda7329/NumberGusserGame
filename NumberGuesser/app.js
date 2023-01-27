//Game values
let min=1,
    max=10,
    winningNum=getRandomNum(min,max);
    guessesLeft=3;

//Get UI elements
const game=document.getElementById("game"),
        minNum=document.querySelector(".min-num"),
        maxNum=document.querySelector(".max-num"),
        guessBtn=document.querySelector("#guess-btn"),
        guessInput=document.querySelector("#guess-input"),
        messsage=document.querySelector(".message");

//Assign UI min and max
minNum.textContent=min;
maxNum.textContent=max;

//play again event listner
game.addEventListener("mousedown",function(e){
    if(e.target.className==="play-again"){
        window.location.reload();
    }

});

//Add event lister for guessBtn
guessBtn.addEventListener("click",function(){
    //When using HTML input type number, they will output actual numbers as "String". So we must covert them to int. Using parseInt()
   let guess=parseInt(guessInput.value);

   //Validate the input
   if (isNaN(guess) || guess<min || guess>max) {
    gameOver(false,`Please enter a number between ${min} and ${max}`);
   }

   //Check if is the winning number
   else if (guess===winningNum) {
        //Won Game
        gameOver(true,`${winningNum} is the answer! YOU WON`);

   }else{
    //Wrong number
    guessesLeft-=1;//Substract 1 from guessesLeft
    //Check if there are guesses left
        if (guessesLeft===0) {
            //Game over
            gameOver(false,`Game Over! Correct number was ${winningNum}`);


        }else{
            //Game running
            //Set message
            gameOver(false,`Answer is wrong! ${guessesLeft} guesses left`);

            //Clear the input
            guessInput.value="";
        }
        return guessesLeft;
   }
});


//Create funcion game over
function gameOver(won,msg){
    
    messsage.style.display="block";
    let colour;
    won===true ? colour="Green":colour="red";
        //Disable input
        if(guessesLeft===0 || won===true){
            guessInput.style.display="none";

            //Play again
            guessBtn.value="Play Again";
            guessBtn.className+="play-again";
        }else{
            setTimeout(hide,2000);
        };
        //change the boarder
        guessInput.style.borderColor=colour;
       
    //Create setMessage funciton to change .message paragraph
            messsage.style.color=colour;
            messsage.textContent=msg;

        }

//Create winning number
function getRandomNum(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}
        
        //Auto hide function
function hide(){
    messsage.style.display="none";
}
