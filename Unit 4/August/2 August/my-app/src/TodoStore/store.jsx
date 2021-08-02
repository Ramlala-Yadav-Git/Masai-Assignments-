import { createStore } from "redux";
import { reducerFunction } from "./reducer";

export const store = new createStore(reducerFunction)