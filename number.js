let number=window.prompt("guess a number btwn 1 and 10?");
let max=10;
let min =1;
randomNum;
if(number===1){
  randomNum=Math.floor(Math.random()*max)+min;
  alert("correct");
}
