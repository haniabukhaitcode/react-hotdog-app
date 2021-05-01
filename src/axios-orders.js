import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-hotdog-app2-default-rtdb.firebaseio.com/",
});

export default instance;
