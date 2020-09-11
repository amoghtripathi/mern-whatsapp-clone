import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://protected-oasis-74400.heroku.com/',
})

export default instance;