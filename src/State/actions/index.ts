import Axios from "axios"
import { ActionTypes } from "../types";

export const FetchPost = () => {
    return async (dispatch:any, getState:any) => {
        const response = await Axios.get("https://jsonplaceholder.typicode.com/posts");

        dispatch({
            type : ActionTypes.FETCH_POST,
            payload : response.data
        })
    }
}

