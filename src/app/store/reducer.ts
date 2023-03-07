import {createReducer} from "@ngrx/store";

export interface IUserState{
  randomUser: object;
}
let initialState = 0;

export const appReducer = createReducer(
  initialState
)
