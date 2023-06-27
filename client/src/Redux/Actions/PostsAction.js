import axios from "axios"
import {  GETALL_POSTS, GET_MY_POST, GET_ONE_POST } from "../ActionTypes/PostTypes"
import { FAIL } from "../ActionTypes/AuthTypes"

export const getallposts =()=> async (dispatch)=>{
    try {
        const res = await axios.get('/api/posts/getAllPosts')
        dispatch(
            {
                type : GETALL_POSTS,
                payload : res.data.Allposts
            }
            )
    } catch (error) {
        dispatch({
            type: FAIL,
            payload : error.response.data.errors 
        })
    }
}

export const addpost =(newpro,navigate)=> async (dispatch)=>{
    try {
         await axios.post('/api/posts/addPost',newpro)
        dispatch(
           getallposts()
            )
        navigate('/AllPosts')
    } catch (error) {
        dispatch({
            type: FAIL,
            payload : error.response.data.errors 
        })
    }
}

export const getOnepost =(id)=> async (dispatch)=>{
    
    
        try {
            const res = await axios.get(`/api/posts/getOnePost/${id}`)
            dispatch(
                {type : GET_ONE_POST,
                payload : res.data.onePost
            })
        } catch (error) {
            console.log(error)
        }
}

export const editpost =(upPost,id,navigate)=>async(dispatch)=>{
    try {
        await axios.put(`/api/posts/updatePost/${id}`,upPost)
 
    
        navigate(`/DescriptionPost/${id}`)
    } catch (error) {
     dispatch({
       type: FAIL,
       payload : error.response.data.errors 
   })
    }
 }
 export const deletePost=(id,navigate)=>async(dispatch)=>{
    try {
      await axios.delete(`/api/posts/deletePost/${id}`)
      dispatch(getallposts())
      navigate('/AllPosts')
    } catch (error) {
      dispatch({
        type: FAIL,
        payload : error.response.data.errors 
    }) 
    }
  }

  export const getMyposts =(id)=> async (dispatch)=>{
    try {
        const res = await axios.get(`/api/posts/getMyPosts/${id}`)
        dispatch(
            {
                type : GET_MY_POST,
                payload : res.data.Allposts
            }
            )
    } catch (error) {
        dispatch({
            type: FAIL,
            payload : error.response.data.errors 
        })
    }
}

export const editValid =(upValid,id)=>async(dispatch)=>{
    try {
        await axios.put(`/api/posts/updatePost/${id}`,upValid)
        dispatch(getallposts())
    } catch (error) {
     dispatch({
       type: FAIL,
       payload : error.response.data.errors 
   })
    }
 }


