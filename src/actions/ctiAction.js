export const Create = (obj) => async (dispatch) => {

try{

    dispatch({
       type: 'CREATE_CTI',
       payload: obj
   
   })
}   
catch {
    dispatch({
        type:'Error',

    })
}

}