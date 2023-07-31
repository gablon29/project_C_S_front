import { getUser } from "./userSlice";
import axios from "axios";

export const get_user = () => (dispatch) => {
    axios.get('http:localhost:3000')
    .then(res => dispatch(getUser(res.data)))
    .catch(err => console.error(err.message))
};