import { getUser } from "./userSlice";
import axios from "axios";

export const get_user = () => async (dispatch) => {
    await axios.get('http:localhost:300/')
    .then(res => dispatch(getUser(res.data)))
    .catch(err => console.error(err.message))
};