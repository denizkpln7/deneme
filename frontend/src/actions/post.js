import * as api from '../api'

export const getPosts=()=>async (dispatch)=>{
    try {
        
        const {data}=await api.postlarGetir();
        const action ={type:'FETCH_ALL',payload:data}
        dispatch(action)
    } catch (error) {
        console.log(error.message);
    }  
}


export const createPost=(post)=>async (dispatch)=>{
    try {
        console.log(post)
        const {data}=await api.postOlustur(post);
        const action ={type:'CREATE',payload:data}
        dispatch(action)
    } catch (error) {
        console.log(error.message);
    }  
}

export const updatePost=(id,post)=>async (dispatch)=>{
    try {
        console.log(post)
        const {data}=await api.postGüncelle(id,post);
        const action ={type:'UPDATE',payload:data}
        dispatch(action)
    } catch (error) {
        console.log(error.message);
    }  
}

export const deletePost=(id)=>async (dispatch)=>{
    try {
        const {data}=await api.postSil(id);
        const action ={type:'DELETE',payload:data}
        dispatch(action)
    } catch (error) {
        console.log(error.message);
    }  
}


export const searchPost=(searchData)=>async (dispatch)=>{
    try {
        const {data:{data}}=await api.search(searchData);
        const action ={type:'SEARCH',payload:data}
        dispatch(action)
    } catch (error) {
        console.log(error.message);
    }  
}


