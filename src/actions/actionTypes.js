


export const updateData = () => ({
    type : 'UPDATE',
    payload : 'Hi here'
    
})

export const deleteData = (id) => ({
    type : 'DELETE',
    payload : id
})


export const getData = () =>{
    return{
        type:'GET',
    }
}