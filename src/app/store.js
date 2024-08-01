import { configureStore } from "@reduxjs/toolkit";
import editReducer from "../reducers/editReducer";
import getReducers from "../reducers/getReducers";
import { thunk } from "redux-thunk";

const store = configureStore({
    reducer : {
        data : getReducers,
        edit : editReducer
    },
    // middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});
store.subscribe(() => {
    console.log("subcribe line",store.getState());
});
export default store;