import { GETALL_POSTS, GET_MY_POST, GET_ONE_POST } from "../ActionTypes/PostTypes"


const intialState={
    Posts : [],
    Post : {},
    myPosts : []
}

const PostReducer =(state= intialState,action)=>{
    switch (action.type) {
        case GETALL_POSTS : return {...state,Posts :action.payload}
        case GET_ONE_POST: return {...state,Post : action.payload}
        case GET_MY_POST: return {...state,myPosts : action.payload}
        default: return state
           
    }
}

export default PostReducer