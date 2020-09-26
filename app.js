var user=0;
var computer=0;
const userscore_span=document.getElementById("userscore");
const computerscore_span=document.getElementById("computerscore");
const scoreboard_div=document.querySelector(".score-board");
const result_div=document.querySelector(".result");
const rock_div=document.getElementById('r');
const paper_div=document.getElementById('p');
const scissors_div=document.getElementById('s');
function computerchoice(){
  const choices=['r','p','s'];
  const randomnumber=Math.floor(Math.random()*3);
  return(choices[randomnumber]);
}
function letterconverter(letter){
  if(letter=="r")
  return("Rock");
  if(letter=="s")
  return("scissors");
  if(letter=="p")
  return("paper");
}
function win(u,c){
  user++;
  userscore_span.innerHTML=user;
  const smalluser="user".fontsize(3).sub();
  const smallcomp="comp".fontsize(3).sub();

  result_div.innerHTML=`${letterconverter(u)}${smalluser} beats  ${letterconverter(c)}${smallcomp} . you win!🔥`;
  document.getElementById(u).classList.add("green-glow");
  setTimeout(function(){document.getElementById(u).classList.remove("green-glow")},800);
}
function lost(u,c){
  computer++;
  computerscore_span.innerHTML=computer;
  const smalluser="user".fontsize(3).sub();
  const smallcomp="comp".fontsize(3).sub();

  result_div.innerHTML=`${letterconverter(u)}${smalluser} loose to  ${letterconverter(c)}${smallcomp} . you lost!!💩`;
  document.getElementById(u).classList.add("red-glow");
  setTimeout(function(){
    document.getElementById(u).classList.remove("red-glow")
  },800);
}
function draw(u,c){
result_div.innerHTML="draw";
const smalluser="user".fontsize(3).sub();
const smallcomp="comp".fontsize(3).sub();
result_div.innerHTML=`${letterconverter(u)}${smalluser} equals  ${letterconverter(c)}${smallcomp} .it's a draw..😁`;
document.getElementById(u).classList.add("gray-glow");
setTimeout(function(){document.getElementById(u).classList.remove("gray-glow")
},800);
}
function game(userchoice){
  const compchoice=computerchoice()
  switch (userchoice+compchoice) {
    case "rs":
    case "pr":
    case "sp":
      win(userchoice,compchoice);
      break;
    case "sr":
    case "rp":
    case "ps":
      lost(userchoice,compchoice);
      break;
    case "rr":
    case "pp":
    case "ss":
      draw(userchoice,compchoice);
      break;
  }
}
rock_div.addEventListener('click',function(){
  game("r");})

paper_div.addEventListener('click',function() {game("p");})
scissors_div.addEventListener('click',function(){
  game("s");})
console.log(computerchoice());
