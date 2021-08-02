import {Reducers} from "../reducers/index"

export enum ActionTypes {
    FETCH_POST = "fetch_post"
} 

export interface IState {
    userId : number,
    id : number,
    title : string,
    body : string
}

export type StateType = ReturnType<typeof Reducers>