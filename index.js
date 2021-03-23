// function sampleFunction() {
//   document.getElementById("inputX")
//   document.getElementById("inputValueX").innerHTML = value / 8;

// }
// sampleFunction();

function cord() {
  let X = document.getElementById("X").value;
  let Y = document.getElementById("Y").value;
  let Z = document.getElementById("Z").value;

  document.getElementById("resultX").innerHTML = `X: ${X / 8}`;
  document.getElementById("resultY").innerHTML = `Y: ${Y / 8}`;
  document.getElementById("resultZ").innerHTML = `Z: ${Z / 8}`;
}
