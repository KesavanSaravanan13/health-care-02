import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getProducts } from "../../Component/API/AxiosApi";

export const initialState = {
    loading: false,
    data: [],
    error: ''
}

export const getData = createAsyncThunk('data/getData', async () => {
    try {
        const response = await getProducts();
        return response.data;
    } catch (error) {
        console.error('Failed to fetch data:', error);
        throw error;
    }
});

const getReducers = createSlice({
    name: 'data',
    initialState,
    extraReducers: builder => {
        builder.addCase(getData.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(getData.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
            state.error = '';
        });
        builder.addCase(getData.rejected, (state, action) => {
            state.loading = false;
            state.data = [];
            state.error = action.error.message;
        });
    }
});

export default getReducers.reducer;

// const getReducers = (state = initialState, action) => {
//     switch (action.type) {
//         case actions.GET_DATA_FETCHING:
//             return produce(state, (draft) => {
//                 draft.loading = action.payload;
//             });
//         case actions.GET_DATA_FETCHED:
//             return produce(state, (draft) => {
//                 draft.loading = action.payload.loading;
//                 draft.data = action.payload.data;
//                 draft.error = action.payload.error;
//             });
//         case actions.GET_DATA_ERROR:
//             return produce(state, (draft) => {
//                 draft.loading = action.payload.loading;
//                 draft.data = action.payload.data;
//                 draft.error = action.payload.error;
//             });
//         default:
//             return state;
//     }
// }

// export const getData = () => {
//     return (dispatch) => {
//         getProducts()
//             .then(response => {
//                 const data = response.data;
//             })
//             .catch(error => {
//             });
//     }
// }