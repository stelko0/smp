function getServerInfo(ip, port) {
  return new Promise((resolve, reject) => {
    fetch(`https://mcapi.us/server/status?ip=${ip}&port=${port || 25565}`)
      .then((response) => response.json())
      .then((data) => {
        resolve(data);
      });
  });
}

function updateServerInfo() {
  getServerInfo("89.215.207.85").then(function (serverInfo) {
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
