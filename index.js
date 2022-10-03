function ClockApp(){
 setInterval( function (){
  let todayDate= new Date();
  let Hour=todayDate.getHours();
  let Minute=todayDate.getMinutes();
  let Seconds=todayDate.getSeconds();
  let session ="AM";
  if(Hour>12){
    session="PM";
    Hour=Hour-12;
  }
  Hour= Hour<10? "0" +Hour : Hour;
  Minute=Minute<10? "0" +Minute : Minute;
  Seconds=Seconds<10? "0" +Seconds : Seconds;
  
  document.getElementById("clock").innerHTML=("Current Time:"+ Hour+":"+Minute+ ":" +Seconds+ " " +session);
}, 1000);

}

ClockApp();


  function handleSubmit(e){
  
   let inputValue= document.getElementById("input").value;
   if (inputValue=='') return;
var TodoText=  document.createElement("input");
 TodoText.style.marginButton="10px";
 var DoingDiv=document.createElement("div");
 DoingDiv.classList.add("doing-div")
 var BtnMark= document.createElement("button");
 var BtnCancle =document.createElement("button");
 BtnCancle.classList.add("btncancle");
  BtnMark.classList.add("btn");
TodoText.value=inputValue;
BtnMark.innerHTML="✓";
BtnCancle.innerHTML="✕";
let clock= document.createElement("p");
var Time= document.getElementById("date");
  var todayDate =Time.value;
  let DoneDiv=document.createElement("div");
  let Done= document.getElementById("done");
var x = setInterval(function(){
    var countdown = new Date(todayDate).getTime();
    var now = new Date().getTime();
    var distance = countdown - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 24)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  if (distance > 0) {
    
 clock.innerHTML= days +  " " +"days" + " "+ hours+ " "+ "hours" +" " + minutes+ " " + "minutes" + " " +seconds + "seconds left";
  
  }
  
  if (distance < 0) {
    clock.innerHTML="Your Todo Time Expired, Done?";
    
}
},1000);

BtnMark.onclick=()=>{
  TodoText.style.textDecoration="line-through";
  

  DoneDiv.classList.add("done-div");
  let DoneText= document.createElement("p");
  DoneDiv.appendChild(TodoText);
  clock.remove();
  DoneDiv.appendChild(BtnCancle);
  Done.appendChild(DoneDiv);
  BtnMark.remove();
 }
 BtnCancle.onclick=()=>{
   TodoText.remove();
   BtnMark.remove();
   BtnCancle.remove();
   clock.remove();
 }
 var parent= document.getElementById("parent");
DoingDiv.appendChild(TodoText);
DoingDiv.appendChild(BtnMark);
DoingDiv.appendChild(BtnCancle);
parent.appendChild(clock);
parent.appendChild(DoingDiv);
var items=document.documentElement;
 
}
function Darkmode(){
 var body=document.body;
 body.classList.toggle("dark");
var icon= document.querySelector(".icon");
if(body.classList.contains("dark")){
icon.innerHTML='&#9788; Light Mode';
}
else{
 icon.innerHTML=' &#9790; DarkMode';
}
}

  
