import { combineReducers } from "redux";
import { Action, ActionTypes, IItem, IState } from "../types";

const initialStatee: IItem[] = [];
const initialState: IState = {
    loading: true,
    error: null,
    items: []
};

const PostReducer = (state = initialState, action: Action) => {
    console.log(`Action Type is : ${action.type}`)
    switch (action.type) {
        case ActionTypes.FETCH_POST_REQUEST:
            return {
                loading : true,
                error : null,
                items : []
            }
        case ActionTypes.FETCH_POST_SUCCESS:
            return {
                loading: false,
                error: null,
                items: action.payload
            }
        case ActionTypes.FETCH_POST_FAILURE:
            return {
                loading: false,
                error: action.error,
                items: []
            }
        default:
            return state;

    }
}

export const Reducers = combineReducers({
    post: PostReducer
})