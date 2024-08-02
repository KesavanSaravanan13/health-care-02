import { configureStore } from "@reduxjs/toolkit";
import editReducer from "../reducers/editReducer";
import getReducers from "../reducers/getReducers";
import { thunk } from "redux-thunk";
import apiSlice from "../reducers/apiSlice";

const store = configureStore({
    reducer : {
        data : getReducers,
        edit : editReducer,
        [apiSlice.reducerPath]: apiSlice.reducer,
    },
    middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
});

// store.subscribe(() => {
//     console.log("subcribe line",store.getState());
// });
export default store;