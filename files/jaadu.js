
for(var i=0; i<document.querySelectorAll(".drum").length; i++){
  document.querySelectorAll(".drum")[i].addEventListener("click", function(){


    var button_innerHTML = this.innerHTML
    make_sound(button_innerHTML);



    button_animation(button_innerHTML)




  });
}
document.addEventListener("keydown", function(event){
  make_sound(event.key);
  button_animation(event.key)
});

function make_sound(key){

  switch (key) {
    case "w":
    var tom1 = new Audio('/Users/ashwani/Desktop/Sample Project/Calling Jaadu/sounds/POST CREDIT SCENE KOI (mp3cut.net) (5).mp3');
    tom1.play();
      break;
      case "a":
      var tom2 = new Audio('/Users/ashwani/Desktop/Sample Project/Calling Jaadu/sounds/POST CREDIT SCENE KOI (mp3cut.net) (6).mp3');
      tom2.play();
      break;
      case "s":
      var tom3 = new Audio('/Users/ashwani/Desktop/Sample Project/Calling Jaadu/sounds/POST CREDIT SCENE KOI (mp3cut.net) (7).mp3');
      tom3.play();
      break;
      case "d":
      var tom4 = new Audio('/Users/ashwani/Desktop/Sample Project/Calling Jaadu/sounds/POST CREDIT SCENE KOI (mp3cut.net) (8).mp3');
      tom4.play();
      break;
      case "j":
      var snare = new Audio('/Users/ashwani/Desktop/Sample Project/Calling Jaadu/sounds/POST CREDIT SCENE KOI (mp3cut.net) (9).mp3');
      snare.play();
      break;
      case "k":
      var crash = new Audio('/Users/ashwani/Desktop/Sample Project/Calling Jaadu/sounds/POST CREDIT SCENE KOI (mp3cut.net) (10).mp3');
      crash.play();
      break;
      case "l":
      var kick = new Audio('/Users/ashwani/Desktop/Sample Project/Calling Jaadu/sounds/POST CREDIT SCENE KOI (mp3cut.net) (13).mp3');
      kick.play();

    default:



  }

}



function button_animation(current_key){
  var current_button = document.querySelector("."+ current_key);
  current_button.classList.add("pressed");

  setTimeout(function(){
    current_button.classList.remove("pressed");
  }, 150)

















}
