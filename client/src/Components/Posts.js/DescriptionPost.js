import { useDispatch, useSelector } from "react-redux"
import { deletePost, getOnepost } from "../../Redux/Actions/PostsAction"
import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import { Button, Modal } from "react-bootstrap"
import { current } from "../../Redux/Actions/AuthActions"


const DescriptionPost = () => {
    const {id} = useParams()
    const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(current())
     dispatch(getOnepost(id))
  },[])
    const user = useSelector(state=>state.AuthReducer.user)
    const Post = useSelector(state=>state.PostReducer.Post)
    // useEffect(()=>{
    //     dispatch(current())
    //      dispatch(getOnepost(id))
    //   },[user,Post])
    const navigate = useNavigate()
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    console.log("user",user?._id)
    console.log("post",Post?.owner?._id)
    console.log(user?._id == Post?.owner?._id)
  return (
    <div>
      {( Post?.owner?._id && user?._id) && 
      <>
      <h1>{Post.title}</h1>
      {
        (user?._id == Post?.owner?._id || user?.role == "admin") &&
        <>
        <Button as = {Link} to ='/EditPost'>Edit</Button>
      
  
      <Button variant="primary" onClick={handleShow}>
        Delete
      </Button>
       <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>{dispatch(deletePost(Post._id,navigate));handleClose()}} >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </></>
      }
      
      </>
      }
    </div>
  )
}

export default DescriptionPost
