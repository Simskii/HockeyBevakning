const express = require('express');
const axios = require('axios');
const moment = require('moment');
const router = express.Router();

const today = moment().format('YYYY-MM-DD');

const url = `https://statsapi.web.nhl.com/api/v1/schedule?startDate=${today}&endDate=${today}&expand=schedule.teams,schedule.linescore,schedule.&leaderCategories=&leaderGameTypes=R&site=en_nhlNORDIC&teamId=&gameType=&timecode=`;

router.get('/', (req, res) => {
    let results;
    axios.get(url)
        .then(response => {
            res.json(filterData(response.data));
        });
    return;
})

function filterData(data) {
    const {dates: game_dates} = data;
    const {games: games} = game_dates;
   return game_dates[0].games;
}

module.exports = router;