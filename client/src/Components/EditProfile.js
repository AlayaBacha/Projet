import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { UpdateProfile, current } from '../Redux/Actions/AuthActions';
import { useEffect, useState } from 'react';

const EditProfile = () => {

    const dispatch = useDispatch()
    useEffect(()=>{
       dispatch(current())
    },[dispatch])

    const user = useSelector(state=>state.AuthReducer.user)


  const [name,setName] = useState(user.name)
  const [age,setAge] = useState(user.age)
  const [email,setEmail] = useState(user.email)
  const [password,setPassword] = useState(user.password)
  const [phone,setPhone] = useState(user.phone)
  const [image,setImage] = useState(user.image)

  useEffect(()=>{
    setName(user.name)
    setAge(user.age)
    setEmail(user.email)
    setPassword(user.password)
    setPhone(user.phone)
    setImage(user.image)

  },[user])

  const navigate = useNavigate()

  const handeleUpdate=(a)=>{
    a.preventDefault()
    dispatch(UpdateProfile({name,age,email,password,phone,image},user._id,navigate))
  }
  return (
    <div className='d-flex justify-content-center'>
      <form class="form_main2" action="">
    <Form className='register'>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Name</Form.Label>
      {/* <Form.Control value={name} onChange={(e)=>setName(e.target.value)} type="text" placeholder="Enter text" /> */}
      <input value={name} onChange={(e)=>setName(e.target.value)} type="text" placeholder="text" id="username" class="inputField" />

    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Age</Form.Label>
      {/* <Form.Control value={age} onChange={(e)=>setAge(e.target.value)} type="date" placeholder="Enter age" /> */}
      <input value={age} onChange={(e)=>setAge(e.target.value)} type="date" placeholder="text" id="username" class="inputField" />

    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Phone</Form.Label>
      {/* <Form.Control value={phone} onChange={(e)=>setPhone(e.target.value)} type="number" placeholder="Enter phone" /> */}
      <input value={phone} onChange={(e)=>setPhone(e.target.value)} type="number" placeholder="text" id="username" class="inputField" />

    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        {/* <Form.Control value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Enter email" /> */}
        <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="text" id="username" class="inputField" />

    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      {/* <Form.Control value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Password" /> */}
      <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="text" id="username" class="inputField" />

    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Image</Form.Label>
      {/* <Form.Control value={image} onChange={(e)=>setImage(e.target.value)} type="text" placeholder="Image" /> */}
      <input value={image} onChange={(e)=>setImage(e.target.value)} type="text" placeholder="text" id="username" class="inputField" />

    </Form.Group>
    
    <button className='submit' onClick={(e)=>handeleUpdate(e)}  id="button">Submit</button>

    {/* <Button onClick={(e)=>handeleUpdate(e)} className='submit' variant="dark" type="submit">
      Submit
    </Button> */}
    
  </Form>
  </form>
  </div>
  )
}

export default EditProfile