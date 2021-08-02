import { combineReducers } from "redux";
import { Action, ActionTypes, IState } from "../types";

const initialState:IState[] = [];

const PostReducer = (state = initialState, action:Action) => {
    switch(action.type)
    {
        case ActionTypes.FETCH_POST_SUCCESS:
            return action.payload
        default:
            return state;
            
    }
}

export const Reducers = combineReducers({
    post : PostReducer
})