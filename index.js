var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

  });

}

document.addEventListener("keypress", function(event) {

  makeSound(event.key);

  buttonAnimation(event.key);

});


function makeSound(key) {

  switch (key) {
    case "c":
      var tom1 = new Audio("sound/note1_c.wav");
      tom1.play();
      break;

    case "d":
      var tom2 = new Audio("sound/note2_d.wav");
      tom2.play();
      break;

    case "e":
      var tom3 = new Audio('sound/note3_e.wav');
      tom3.play();
      break;

    case "f":
      var tom4 = new Audio('sound/note4_f.wav');
      tom4.play();
      break;

    case "g":
      var snare = new Audio('sound/note5_g.wav');
      snare.play();
      break;

    case "a":
      var crash = new Audio('sound/note6_a.wav');
      crash.play();
      break;

    case "b":
      var kick = new Audio('sound/note7_b.wav');
      kick.play();
      break;

      case "c2":
        var kick = new Audio('sound/note8_c2.wav');
        kick.play();
        break;


    default: console.log(key);

  }
}


function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

}
