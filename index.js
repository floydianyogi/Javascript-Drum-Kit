
var totalButtons = document.querySelectorAll(".drum").length;

for(i = 0; i < totalButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    alert("I got clicked!")
  });
}
