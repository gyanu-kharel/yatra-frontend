import axios from "axios";


const appUser = localStorage.getItem('appUser');
const parsed = JSON.parse(appUser!);
const token = parsed && parsed.token;

export default axios.create({
    baseURL: "http://localhost:5250/api",
    headers: {
        "Authorization": `Bearer ${token}`,
        "Content-type": "application/json"
    }
});
