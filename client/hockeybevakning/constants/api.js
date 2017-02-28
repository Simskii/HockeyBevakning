import axios from 'axios';

axios.defaults.baseURL = 'http://10.1.25.95:3002/api/v1'

class GamesApi {
    constructor() {
        this.path = '/';
    }

    async fetchGames() {
        const {data} = await axios.get(this.path);
        return data;
    }
}

export {
    GamesApi
}