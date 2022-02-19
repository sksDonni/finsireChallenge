import axios from "axios";

const baseUrl = "http://localhost:5000/";

const API = axios.create({ baseUrl });

export const addElements = (element) => API.post(baseUrl, element)
export const getData = () => API.get(baseUrl)

export const newDataset = () => API.delete(baseUrl)

