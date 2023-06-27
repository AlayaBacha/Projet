import { useEffect, useState } from "react"
import { addpost } from "../../Redux/Actions/PostsAction"
import {Button,Form} from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { current } from "../../Redux/Actions/AuthActions"
import { FormStyle } from "../Styles"
import axios from "axios"
const AddPost = () => {
    const dispatch = useDispatch()
    useEffect(()=>{
       dispatch(current())
    },[dispatch])
    const user = useSelector(state=>state.AuthReducer.user)
    const [title,setTitle] = useState('')
    const [description,setDescription] = useState('')
    const [adresse,setAdresse] = useState('')
    const [image,setImage] = useState('')
    const [uploading, setUploading] = useState(false);

    const navigate = useNavigate()
    const handleAddpost=(a)=>{
      a.preventDefault()
      dispatch(addpost({title,description,adresse,image,owner : user._id},navigate)) 
    }
    const uploadProfileImage = (e) => {
      const file = e.target.files[0];
      const bodyFormData = new FormData();
      bodyFormData.append("image", file);
      setUploading(true);
      axios
        .post("/api/uploads", bodyFormData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
          setImage(response.data);
          setUploading(false);
        })
        .catch((err) => {
          console.log(err);
          setUploading(false);
        });
    };

  return (
    
      <div className='d-flex justify-content-center'>
        <form class="form_main2" action="">
    <Form className='register'>
    
    <Form.Group className="mb-3" controlId="formBasicPassword">
      <>
                  {image ? (
                    <img
                      src={image}
                      width="100%"
                      style={{ margin: "8px 0" }}
                      height="150px"
                      alt="product"
                    />
                  ) : (
                    <div style={{ margin: "8px 0" }}>
                      {!uploading ? "Upload Image For Product" : "Loading ..."}
                    </div>
                  )}
                  <div
                  >
                    Select File
                    <input
                      accept="image/*"
                      type="file"

                      onChange={uploadProfileImage}
                    />
                  </div>
                </>
      </Form.Group>
    
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Title</Form.Label>
      {/* <Form.Control style={FormStyle} onChange={(e)=>setTitle(e.target.value)} type="text" placeholder="Enter text" /> */}
      <input onChange={(e)=>setTitle(e.target.value)} type="text" placeholder="Enter Title" id="username" class="inputField" />

    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>description</Form.Label>
      {/* <Form.Control style={FormStyle} onChange={(e)=>setDescription(e.target.value)} type="text" placeholder="Enter age" /> */}
      <input onChange={(e)=>setDescription(e.target.value)} type="text" placeholder="Enter Description" id="username" class="inputField" />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>adresse</Form.Label>
      {/* <Form.Control style={FormStyle} onChange={(e)=>setAdresse(e.target.value)} type="text" placeholder="Enter phone" /> */}
      <input onChange={(e)=>setAdresse(e.target.value)} type="text" placeholder="Enter Adresse" id="username" class="inputField" />
    </Form.Group>

    <div className='btnregister'>
    <button className='submit' onClick={(e)=>handleAddpost(e)}  id="button">Submit</button>
    {/* <Button className='submit' onClick={(e)=>handleAddpost(e)} variant="dark" type="submit">
      Submit
    </Button> */}
    </div>

    </Form>
    </form>
    </div>
  )
}

export default AddPost
