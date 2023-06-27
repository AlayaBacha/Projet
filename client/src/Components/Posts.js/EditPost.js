import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { editpost, getOnepost } from '../../Redux/Actions/PostsAction';

const EditPost = () => {
    const {id} = useParams()
    const dispatch = useDispatch()
  useEffect(()=>{
     dispatch(getOnepost(id))
  },[dispatch,id])
    const Post = useSelector(state=>state.PostReducer.Post)

    const [title,setTitle] = useState(Post.title)
  const [description,setDescription] = useState(Post.description)
  const [addresse,setAddresse] = useState(Post.address)
  const [image,setImage] = useState(Post.image)

  useEffect(()=>{
    setTitle(Post.title)
    setDescription(Post.description)
    setAddresse(Post.addresse)
    setImage(Post.image)

  },[Post,id])

  const navigate = useNavigate()

  const handeleUpdate=(a)=>{
    a.preventDefault()
    dispatch(editpost({title,description,addresse,image},Post._id,navigate))
  }
  return (
    <div>
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Title</Form.Label>
        <Form.Control value={title} onChange={(e)=>setTitle(e.target.value)} type="text" placeholder="Enter email" /> 
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>description</Form.Label>
        <Form.Control value={description} onChange={(e)=>setDescription(e.target.value)} type="text" placeholder="Enter email" /> 
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>address</Form.Label>
        <Form.Control value={addresse} onChange={(e)=>setAddresse(e.target.value)} type="text" placeholder="Enter email" /> 
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>image</Form.Label>
        <Form.Control value={image} onChange={(e)=>setImage(e.target.value)} type="text" placeholder="Enter email" /> 
      </Form.Group>

      
      <Button onClick={(e)=>handeleUpdate(e)}  variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
  )
}

export default EditPost
