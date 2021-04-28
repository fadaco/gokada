import axios from 'axios';
export const BASE_URL = 'https://jsonplaceholder.typicode.com/';

export const SERVER_REQUEST = async (url, type, body) => {
    try {
        const response = type.toLowerCase() === 'post' ?
        await axios.post(`${BASE_URL}${url}`, body, { headers: {
            'Content-Type': 'application/json'
        }})
         : await axios.get(`${BASE_URL}${url}`, { headers: {
            'Content-Type': 'application/json'
         }})
         return response.data;
    } catch (error){
        return error.response.data
    }
}