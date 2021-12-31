// its a very good promise-based library for when you make request to internet
import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3/"
});


export default instance;