import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllUsers } from "../Redux/Actions/AuthActions"
import CardUser from "./CardUser";

const ListUsers=()=>{
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getAllUsers())
    },[dispatch])

    const users = useSelector(state=> state.AuthReducer.users)
    return(
        <div className="d-flex flex-wrap justify-content-around">
            {/* {
               users &&  users.map(el=><h1>{el.name}</h1>)
            } */}
          {
            users && users.map(el=> <CardUser el={el}/> )
          }
        </div>
    )
}

export default ListUsers