const express = require('express');
const axios = require('axios');
const moment = require('moment');
const router = express.Router();



router.get('/', (req, res) => {
    const yesterday = moment().subtract(1, 'd').format('YYYY-MM-DD')
    const today = moment().format('YYYY-MM-DD');
    const url = `https://statsapi.web.nhl.com/api/v1/schedule?startDate=${yesterday}&endDate=${today}&expand=schedule.teams,schedule.linescore,schedule.&leaderCategories=&leaderGameTypes=R&site=en_nhlNORDIC&teamId=&gameType=&timecode=`;

    axios.get(url)
        .then(response => {
            res.json(filterData(response.data));
        });
    return;
})

function filterData(data) {
    const {dates: game_dates} = data;
    const {games: games} = game_dates;
    let currentGames = [];
    for (let date of game_dates) {
        date.games.forEach(g => {
    console.log(g)
            currentGames.push(g);
        })
    }
    return currentGames
}

module.exports = router;