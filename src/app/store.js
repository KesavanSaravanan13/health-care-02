import { configureStore } from "@reduxjs/toolkit";
import editReducer, { initialState } from "../reducers/editReducer";


const store = configureStore({
    reducer : {
        // get : getReducer,
        edit : editReducer
    }
});
store.subscribe(() => {
    console.log("subcribe line",store.getState());
});
export default store;