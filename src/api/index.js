import axios from "axios";

const API = axios.create({
  baseURL: "https://api.punkapi.com/v2/beers",
});

export const searchBeer = (query) => API.get(query);
export const fetchBeers = (page) => API.get(`?page=${!page ? "1" : page}`);
