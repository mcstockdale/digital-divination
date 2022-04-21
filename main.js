document.addEventListener("DOMContentLoaded", function(){

let inputQuestion = document.querySelector("input")
let yesButton= document.querySelector("#winner")
let noButton = document.querySelector("#loser")


inputQuestion.addEventListener("keyup", function(){
    var qstn= document.getElementById("input").value;   
console.log("success",qstn)
yesButton.innerHTML= qstn + " me.";
noButton.innerHTML= qstn + " me not."
    
})



})

