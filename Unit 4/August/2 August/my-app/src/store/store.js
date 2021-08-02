
import { createStore } from "redux";
import { reducerFunction } from "./reducer.js";
export const store = new createStore(reducerFunction);
