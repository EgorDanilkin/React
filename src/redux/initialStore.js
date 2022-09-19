import {createStore} from "redux";
import {chatsReducer} from "./reducers/chatsReducer";

export const store = createStore(chatsReducer);