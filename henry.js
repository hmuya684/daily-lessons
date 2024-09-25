// console.log("hello you");
// let a=2;
// let b=3;
// var c=a+b;
// console.log(c);
// let heigth =10;
// let base=10;
// let area=(base*heigth)/2;
// console.log(area);
// let number=99;
// if (number%2==0){
//   console.log("even number");
// }else if(number!==0){
//   console.log("odd number");
// }
// let num1=3;
// let num2=9;
// let num3=5;
// function dp(num1,num2,num3){
//   if (num1>=num2&&num1>=num3){
//     return num1;
//   }else if(num2>=num1&&num2>=num3){
//     return num2;
//   }else{
//     return num3;
//   }
// } dp();
// let myBtn=document.getElementById("btn");
// let myH1=document.getElementById("myH1");
// onclick=function say(){
  
// }
const increaseBtn=document.getElementById("increaseBtn");
const resetBtn=document.getElementById("resetbtn");
const decreaseBtn=document.getElementById("decreasebtn");
const countLabel=document.getElementById("mylabel");
let count=0;
increaseBtn.onclick =function(){
  count++;
  countLabel.textContent=count;
}
decreaseBtn.onclick=function(){
  count--;
  countLabel.textContent=count;
}
resetBtn.onclick=function(){
  count=0;
  countLabel.textContent=count;
}





