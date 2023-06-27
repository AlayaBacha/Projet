import { useState } from 'react';
import axios from "axios"
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { register } from '../Redux/Actions/AuthActions';



const Register = () => {
  const [name,setName] = useState('')
  const [age,setAge] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [phone,setPhone] = useState('')
  const [image,setImage] = useState('')
  const [uploading, setUploading] = useState(false);
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleRegister=(a)=>{
    a.preventDefault()
    dispatch(register({name,age,phone,email,image,password},navigate)) 
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
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Name</Form.Label>
      {/* <Form.Control style={FormStyle} onChange={(e)=>setName(e.target.value)} type="text" placeholder="Enter text" /> */}
      <input onChange={(e)=>setName(e.target.value)} type="text" placeholder="Enter Name" id="username" class="inputField" />
      
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Age</Form.Label>
      {/* <Form.Control style={FormStyle} onChange={(e)=>setAge(e.target.value)} type="date" placeholder="Enter age" /> */}
      <input onChange={(e)=>setAge(e.target.value)} type="date" placeholder="Enter age" id="username" class="inputField" />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Phone</Form.Label>
      {/* <Form.Control style={FormStyle} onChange={(e)=>setPhone(e.target.value)} type="number" placeholder="Enter phone" /> */}
      <input onChange={(e)=>setPhone(e.target.value)} type="number" placeholder="Phone" id="username" class="inputField" />
      
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        {/* <Form.Control style={FormStyle} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Enter email" /> */}
        <input onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Enter email" id="username" class="inputField" />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      {/* <Form.Control style={FormStyle} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Password" /> */}
      <input onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Password" id="username" class="inputField" />
    </Form.Group>
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

   
    
    <div className='btnregister'>
    <button className='submit' onClick={(e)=>handleRegister(e)}  id="button">Submit</button>
    {/* <Button className='submit' onClick={(e)=>handleRegister(e)} variant="dark">
      Submit
    </Button> */}
    
    </div>
    
  </Form>
  </form>
  </div>
  )
}

export default Register
