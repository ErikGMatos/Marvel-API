import axios from "axios";

const api = axios.create({
    baseURL: "https://gateway.marvel.com/v1/public/characters?apikey=16e33128f345b5c851618628b96f7f3b&ts=1&hash=29a972cc2947b7455e4b727069c7fe6b"
});

export default api;
