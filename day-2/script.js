
let container=document.getElementById("game-container")
let randomNum = Math.floor(Math.random() * 10) + 1;
console.log(randomNum);


let maxAttempts = 3;

let message=document.getElementById("message")
let attempts_text=document.getElementById("attempts")

function guessBtn(){
    maxAttempts-=1
    let  input = document.getElementById("userInput").value
    if (maxAttempts<0){
    message.innerText=" BETTER LUCK NEXT TIME ,Attempts are over"
    return;
    }
    else if (randomNum==input){
        message.innerText="YOU FOUND THE NUMBER"
        return;
    }else if( randomNum > input){
        message.innerText=" Number is too Low"
        attempts_text.innerText=`remaining ${maxAttempts}`
    }
    else if (randomNum < input){
        message.innerText=" Number is too high"
        attempts_text.innerText=`remaining ${maxAttempts}`
    }
    }

