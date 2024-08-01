export const GET_DATA_FETCHING = 'GET_DATA_FETCHING';
export const GET_DATA_FETCHED = 'GET_DATA_FETCHED';
export const GET_DATA_ERROR = 'GET_DATA_ERROR';


export const updateData = () => ({
    type: 'UPDATE',
    payload: 'Hi here'

})

export const deleteData = (id) => ({
    type: 'DELETE',
    payload: id
})


export const getDataFetching = () => {
    return {
        type: GET_DATA_FETCHING,
        payload : true,
    }
}
export const getDataFetched = (data) => {
    return {
        type: GET_DATA_FETCHED,
        payload : {
            loading:false,
            data:data,
            error:'',
        },
    }
}
export const getDataError = (error) => {
    return {
        type: GET_DATA_ERROR,
        payload : {
            payload : {
                loading:false,
                data:[],
                error:error,
            },
        },
    }
}