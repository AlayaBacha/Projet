import { CLEARERRORS, HANDLEEERRORS } from "../ActionTypes/ErrorTypes"

export const handelErrors =(msg)=>(dispatch)=>{
    const id = Math.random()

    dispatch({
        type : HANDLEEERRORS,
        payload : {msg,id}
    })

    setTimeout(()=>{
        dispatch({
            type : CLEARERRORS,
            payload : id 
        })
    },3000)
}