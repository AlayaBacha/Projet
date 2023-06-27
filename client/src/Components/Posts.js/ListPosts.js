import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getallposts } from "../../Redux/Actions/PostsAction"
import CradPost from "./CradPost"
import { current } from "../../Redux/Actions/AuthActions"

const ListPosts = () => {
    const dispatch = useDispatch()
    useEffect(()=>{
      dispatch(getallposts())
      dispatch(current())
    },[dispatch])
 
     const user = useSelector(state=>state.AuthReducer.user)
    const Posts = useSelector(state=> state.PostReducer.Posts)
  return (
    <div className="d-flex flex-wrap justify-content-around">

        {
            user.role == "admin" ? 
            <>
              {
            Posts && 
            <>{
              Posts.length == 0 ? <h2>Pas de post</h2> : Posts.map(el=> <CradPost el={el}/> )
            } </>
               }
             </>
      :
       <>
              {
            Posts && 
            <>{
              Posts.length == 0 ? <h2>Pas de post</h2> : Posts.filter(el=> el.valid == true).map(el=> <CradPost el={el}/> )
            } </>
               }
      </>
      
      
        }
    
    </div>
  )
}

export default ListPosts
