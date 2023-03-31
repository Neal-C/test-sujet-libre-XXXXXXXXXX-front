import axios from "axios";

const AXIOS_instance = axios.create({
	baseURL: "http://localhost:8000/api/",
});

export default AXIOS_instance;
