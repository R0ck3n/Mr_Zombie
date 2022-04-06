let zombie = 0;
let position = 0;
const callBackFunction = () => {
  zombie.style.backgroundPositionX = `${position}px`;
  position-=100;
}
function main() {
  zombie = document.getElementById("zombietomb");
  zombie.style.backgroundImage = "url('./IMG/zombie.png')";
  let timeoutId = window.setInterval(callBackFunction, 125);
}
addEventListener("load", main);