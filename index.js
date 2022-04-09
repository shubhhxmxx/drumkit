for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var buttonname = this.innerHTML;
    this.style.color = "white";
    makesound(buttonname);
  });
}
document.addEventListener("keydown",function(event){
  makesound(event.key);

});
function makesound( buttonname){
  switch (buttonname) {
    case "w":
      var audio = new Audio("sounds/tom-1.mp3");
      break;
    case "a":
      var audio = new Audio("sounds/tom-2.mp3");
      break;
    case "s":
      var audio = new Audio("sounds/tom-4.mp3");
      break;
    case "d":
      var audio = new Audio("sounds/tom-4.mp3");
      break;
    case "j":
      var audio = new Audio("sounds/snare.mp3");
      break;
    case "k":
      var audio = new Audio("sounds/crash.mp3");
      break;
    case "l":
      var audio = new Audio("sounds/kick-bass.mp3");
      break;

    default:
      var audio=new Audio("sounds/crash.mp3");
      console.log(buttonname);
  }
  audio.play();
  setanimation(buttonname);
}
function setanimation(buttonname){
  var buttonpressed=document.querySelector("."+buttonname);
  console.log(buttonpressed);
  buttonpressed.classList.add("pressed");
  setTimeout(function () {
    buttonpressed.classList.remove("pressed");
  }, 100);
}
