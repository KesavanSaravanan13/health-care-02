
import * as actions from '../../actions/actionTypes';
import { getProducts } from '../../Component/API/AxiosApi';
import { initialState } from './getReducers';
let data=[];
const response = () => {
    getProducts().then(response =>{
    data = response.data;
})
return data;
};


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