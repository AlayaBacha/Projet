import { useDispatch, useSelector } from "react-redux"
import { getMyposts } from "../../Redux/Actions/PostsAction"
import { useEffect } from "react"
import { current } from "../../Redux/Actions/AuthActions"
import { Link } from "react-router-dom"


const MyPosts=()=>{
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(current())
    },[])
   
    const user = useSelector(state=>state.AuthReducer.user)
    
    useEffect(()=>{
        dispatch(getMyposts(user?._id))
      },[user])
  
      const myPosts = useSelector(state=> state.PostReducer.myPosts)
    return(
        <div>
            {
                myPosts && myPosts.map(el=>
                <>

                <Link to={`/DescriptionPost/${el._id}`}><h1>{el.title}</h1></Link>
                <h2>{el.valid ? "Valider" : "Non valider"}</h2>
                 
                
                </>)
            }



               
        </div>
    )
}

export default MyPosts