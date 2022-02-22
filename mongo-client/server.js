/// selectors
const players = document.getElementById('player-name');
const playerRun = document.getElementById('runs');
const playerInput = document.getElementById('player-add');
const btnPlayerAdd = document.getElementById('addPlayer-btn');

/// get data from server and show in UI
// fetch("http://localhost:4000/players/3")
//     .then(res => res.json())
//     .then(data => {
//         player.innerText = data.player.name;
//         playerRun.innerText = data.player.odi_run;
//     });

/// event listener
btnPlayerAdd.addEventListener('click', () => {
    const name = playerInput.value;
    const playerName = { name: name };

    // POST data to server
    fetch("http://localhost:4000/addPlayer", {
        method: 'POST',
        body: JSON.stringify(playerName),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    })
        .then(res => res.json())
        .then(data => updatePlayer(data))

    playerInput.value = '';
});

/// update player on UI from server
const updatePlayer = (player) => {
    players.innerText = player.name;
}