import axios from "axios";

axios.defaults.baseURL = 'https://sportsshooting-drf-rpf13-5060e23f8756.herokuapp.com/';
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;

// intercept the request
export const axiosReq = axios.create();

// intercept the response
export const axiosRes = axios.create();
