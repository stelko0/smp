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

let coords = {
  x: 15,
  y: 64,
  z: 10,
  name: "Home",
};
document.getElementById("coordinates").innerHTML = `<h2>${coords.name}</h2>
<h4>X: ${coords.x}</h4>
<h4>Y: ${coords.y}</h4>
<h4>Z: ${coords.z}</h4>
`;

let coords2 = {
  x: 15,
  y: 64,
  z: 30,
  name: "Home",
};
document.getElementById("coordinates2").innerHTML = `<h2>${coords2.name}</h2>
<h4>X: ${coords2.x}</h4>
<h4>Y: ${coords2.y}</h4>
<h4>Z: ${coords2.z}</h4>
`;
