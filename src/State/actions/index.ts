import Axios from "axios"
import { ActionTypes } from "../types";

export const FetchPost = () => {
    return async (dispatch:any, getState:any) => {
        dispatch({
            type : ActionTypes.FETCH_POST_REQUEST,
            payload : []
        })
        const response = await Axios.get("https://jsonplaceholder.typicode.com/posts");

        if(response.status !== 200)
        {
            dispatch({
                type : ActionTypes.FETCH_POST_FAILURE,
                error : "An error accour"
            })
        }

        dispatch({
            type : ActionTypes.FETCH_POST_SUCCESS,
            payload : response.data
        })
    }
}

