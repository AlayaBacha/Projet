import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getoneuser, updateUser } from '../Redux/Actions/AuthActions';

const EditUser = () => {

  const {id} = useParams()

  const dispatch = useDispatch()

  useEffect(()=>{
     dispatch(getoneuser(id))
  },[dispatch,id])

  const OneUser = useSelector(state=>state.AuthReducer.OneUser)

  const [name,setName] = useState(OneUser.name)
  const [age,setAge] = useState(OneUser.age)
  const [email,setEmail] = useState(OneUser.email)
  const [password,setPassword] = useState(OneUser.password)
  const [phone,setPhone] = useState(OneUser.phone)
  const [image,setImage] = useState(OneUser.image)

  useEffect(()=>{
    setName(OneUser.name)
    setAge(OneUser.age)
    setEmail(OneUser.email)
    setPassword(OneUser.password)
    setPhone(OneUser.phone)
    setImage(OneUser.image)

  },[OneUser])

  const navigate = useNavigate()

  const handeleUpdate=(a)=>{
    a.preventDefault()
    dispatch(updateUser({name,age,email,password,phone,image},id,navigate))
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
      <input value={age} onChange={(e)=>setAge(e.target.value)} type="text" placeholder="text" id="username" class="inputField" />

    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Phone</Form.Label>
      {/* <Form.Control value={phone} onChange={(e)=>setPhone(e.target.value)} type="number" placeholder="Enter phone" /> */}
      <input value={phone} onChange={(e)=>setPhone(e.target.value)} type="text" placeholder="text" id="username" class="inputField" />

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

export default EditUser
