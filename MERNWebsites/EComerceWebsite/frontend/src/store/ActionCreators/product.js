


export const getAll = () => async (dispatch) =>{

    const res = await fetch("http://localhost:4000/api/v1/products")
    const json = await res.json()
    dispatch({type:"GET_PRODUCTS",payload:json})
    console.log(json);
}


