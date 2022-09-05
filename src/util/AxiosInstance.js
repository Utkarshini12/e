import axios from 'axios'; 

// axios.get("https://ecommce-be.herokuapp.com/ecomm/api/v1/login").then()
// return(
//     <div></div>
// )

import { API_BASE_URL, TIMEOUT } from '../config/Config';


// global headers 
axios.defaults.headers.common['Content-Type']='application/json';
axios.defaults.headers.common['Accept']='application/json';

export const AxiosIntance = axios.create({
    baseUrl: API_BASE_URL, 
    timeout: TIMEOUT
})