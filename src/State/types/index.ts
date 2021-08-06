import {Reducers} from "../reducers/index"

export enum ActionTypes {
    FETCH_POST_SUCCESS = "fetch_post_success",
    FETCH_POST_REQUEST = "fetch_post_request",
    FETCH_POST_FAILURE = "fetch_post_failure"
} 

export interface IItem {
    userId : number,
    id : number,
    title : string,
    body : string
}
export interface IState {
    loading : boolean
    error : string | null
    items : IItem[]
}

export type StateType = ReturnType<typeof Reducers>

export interface IPostSuccessAction {
    type : ActionTypes.FETCH_POST_SUCCESS
    payload : IItem[]
}
export interface IPostRequestAction {
    type : ActionTypes.FETCH_POST_REQUEST
    loading : boolean
}
export interface IPostFailureAction {
    type : ActionTypes.FETCH_POST_FAILURE
    error : string
    payload : []
}

export type Action = IPostSuccessAction | IPostRequestAction |IPostFailureAction