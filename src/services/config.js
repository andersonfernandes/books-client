import axios from 'axios';

export const server = axios.create({
    baseURL: 'https://expressaula.herokuapp.com/',
    headers: { "Content-Type": "application/json" },
})
