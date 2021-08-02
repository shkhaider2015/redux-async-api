import { combineReducers } from "redux";
import { ActionTypes, IState } from "../types";

const initialState:IState[] = [];

const PostReducer = (state = initialState, action:any) => {
    switch(action.type)
    {
        case ActionTypes.FETCH_POST:
            return action.payload
        default:
            return state;
            
    }
}

export const Reducers = combineReducers({
    post : PostReducer
})