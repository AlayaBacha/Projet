import { CURRENT, FAIL, GETALLUSERS, GETONEUSER, LOGIN, LOGOUT, REGISTER } from "../ActionTypes/AuthTypes"
import axios from 'axios'
import { handelErrors } from "./ErrorActions"

export const register=(newUser,navigate)=>async(dispatch)=>{
  try {
    const res = await axios.post('/api/users/SignUp',newUser)

    dispatch({
        type : REGISTER,
        payload : res.data
    })
    navigate('/Profile')
  } catch (error) {
    // dispatch({
    //     type: FAIL,
    //     payload : error.response.data.errors 
    // })
    error.response.data.errors.forEach(element => {
        dispatch(handelErrors(element.msg))
    });
  }
}


export const login=(logedUser,navigate)=>async(dispatch)=>{
  try {
    const res = await axios.post('/api/users/SingIn',logedUser)
    dispatch({
        type : LOGIN,
        payload : res.data
    })
    navigate('/Profile')
  } catch (error) {
    // dispatch({
    //     type: FAIL,
    //     payload : error.response.data.errors 
    // })
    error.response.data.errors.forEach(element => {
        dispatch(handelErrors(element.msg))
    });
  }
}

export const current=()=>async(dispatch)=>{
  try {
    const config = {
        headers : {
            Authorization : localStorage.getItem('token')
        }
    }
    const res = await axios.get('/api/users/getCurrentUser', config)
    dispatch({
        type : CURRENT,
        payload : res.data
    })
  } catch (error) {
    dispatch({
        type: FAIL,
        payload : error.response.data.errors 
    })
  }
}

export const logout = ()=>{
    return(
        {
            type : LOGOUT
        }
    )
}

export const getAllUsers=()=>async(dispatch)=>{
  try {
  
    const res = await axios.get('/api/users/getAllUsers')

    dispatch(
      {
        type : GETALLUSERS,
        payload : res.data.users
      }
    )
  } catch (error) {
    dispatch({
        type: FAIL,
        payload : error.response.data.errors 
    })
  }
}

export const getoneuser=(id)=>async(dispatch)=>{
     try {
      const res = await axios.get(`/api/users/getOneUser/${id}`)
      dispatch(
        {
          type : GETONEUSER,
          payload : res.data.oneUser
        }
      )
     } catch (error) {
      dispatch({
        type: FAIL,
        payload : error.response.data.errors 
    })
     }
}

export const updateUser =(upUser,id,navigate)=>async(dispatch)=>{
   try {
       await axios.put(`/api/users/updateUser/${id}`,upUser)

       dispatch(getAllUsers())
       navigate("/ListUsers")
   } catch (error) {
    dispatch({
      type: FAIL,
      payload : error.response.data.errors 
  })
   }
}

export const deleteUser=(id)=>async(dispatch)=>{
  try {
    await axios.delete(`/api/users/deleteUser/${id}`)
    dispatch(getAllUsers())
  } catch (error) {
    dispatch({
      type: FAIL,
      payload : error.response.data.errors 
  }) 
  }
}

export const UpdateProfile =(upUser,id,navigate)=>async(dispatch)=>{
  try {
      await axios.put(`/api/users/updateUser/${id}`,upUser)

      dispatch(current())
      navigate("/Profile")
  } catch (error) {
   dispatch({
     type: FAIL,
     payload : error.response.data.errors 
 })
  }
}

export const deleteProfile=(id,navigate)=>async(dispatch)=>{
  try {
    await axios.delete(`/api/users/deleteUser/${id}`)
    dispatch(logout())
    navigate('/')
  } catch (error) {
    dispatch({
      type: FAIL,
      payload : error.response.data.errors 
  }) 
  }
}
