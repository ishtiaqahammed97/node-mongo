const express = require('express');
const cors = require('cors');
var bodyParser = require('body-parser')

const app = express();

/// middleware
app.use(cors());
app.use(bodyParser.json())


const players = [{
    name: 'Tamim Iqbal',
    odi_run: 6512,
    100: 16,
    50: 52
},
{
    name: 'Sakib al hasan',
    odi_run: 7012,
    100: 12,
    50: 37
},
{
    name: 'Mushfiqur Rahim',
    odi_run: 5042,
    100: 8,
    50: 25
},
{
    name: 'Mahmudullahh Riyad',
    odi_run: 4345,
    100: 4,
    50: 18
}]

// routes
app.get('/', (req, res) => {
    res.send(players)
})

app.get('/players', (req, res) => {
    res.send(players)
});

// dynamic route
app.get('/players/:id', (req, res) => {
    const id = req.params.id;
    const player = players[id];
    res.send({ id, player });
    // console.log(req.params)
})

// post request
app.post('/addPlayer', (req, res) => {
    /// save to database
    const player = req.body;
    res.send(player);
})


app.listen(4000, () => console.log("listening to port 4000"))