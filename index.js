//Check how many players have in server
function getServerInfo(ip, port) {
  return new Promise((resolve, reject) => {
    fetch(`https://mcapi.us/server/status?ip=${ip}&port=${port || 31853}`)
      .then((response) => response.json())
      .then((data) => {
        resolve(data);
      });
  });
}

function updateServerInfo() {
  getServerInfo("94.130.219.9").then(function (serverInfo) {
    const { online, players } = serverInfo;

    if (online) {
      //InnerHTML
      document.getElementById("status").innerHTML = "Online";
      document.getElementById("onlinePlayers").innerHTML = players.now;
      document.getElementById("maxPlayers").innerHTML = players.max;

      // ClassName
      document.getElementById("status").className = "online";
      document.getElementById("onlinePlayers").className = "online-players";
      document.getElementById("maxPlayers").className = "max-players";
    } else {
      // InnerHTML
      document.getElementById("status").innerHTML = "Offline";
      document.getElementById("onlinePlayers").innerHTML = 0;
      document.getElementById("maxPlayers").innerHTML = 0;

      //ClassName
      document.getElementById("status").className = "offline";
      document.getElementById("onlinePlayers").className = "offline";
      document.getElementById("maxPlayers").className = "offline";
    }
  });
}

document.getElementById("refresh").addEventListener("click", updateServerInfo); // Когато цъкнеш рефреш
document.addEventListener("DOMContentLoaded", updateServerInfo); // Когато зареди страницата

//Enter coordinates and calculate
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

//Add or Remove waypoint system
function addWaypoint() {
  let ul = document.getElementById("dynamic-list"); // Излизат резултатите
  let candidate = document.getElementById("candidate"); // Полето където пишеш стойност
  let li = document.createElement("element"); // Списък
  if (candidate.value.length <= 1){
    return;
  }
   li.setAttribute("id", candidate.value);
  li.appendChild(document.createTextNode(candidate.value));
  ul.appendChild(li);
}

function removeWaypoint() {
  let ul = document.getElementById("dynamic-list");
  let candidate = document.getElementById("candidate");
  let item = document.getElementById(candidate.value);
  ul.removeChild(item);
}
