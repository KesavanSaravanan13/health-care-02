
import * as actions from '../actions/actionTypes';
import { getProducts } from '../Component/MainColumn/AxiosApi';
let data=[];
const response = () => {
    getProducts().then(response =>{
    data = response.data;
})
return data;
};

export const initialState = response();

const editReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.updateData:
            //update 
            return {
                ...state,
                description : action.payload
            };
        case actions.deleteData:
            //
        default:
            return state;
    }
}

export default editReducer;