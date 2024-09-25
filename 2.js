let increase=document.getElementById("myincrease");
let reset=document.getElementById("myreset");
let decrease=document.getElementById("mydecrease");
let label=document.getElementById("mylabel");
let count=0;
increase.onclick=function(increase) {
  label.textContent=count;
  count++;
}
decrease.onclick=function(decrease) {
  label.textContent=count;
  count--;
}
reset.onclick=function (reset) {
  label.textContent=count;
  count=0;
}