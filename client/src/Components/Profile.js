import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { current, deleteProfile } from "../Redux/Actions/AuthActions"
import Button from "react-bootstrap/esm/Button"
import { Link, useNavigate } from "react-router-dom"
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';

import Image from 'react-bootstrap/Image';


const Profile = ({el}) => {
  const dispatch = useDispatch()
  useEffect(()=>{
     dispatch(current())
  },[dispatch])
  const user = useSelector(state=>state.AuthReducer.user)
  const navigate = useNavigate()
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <section className="uuu">
    <div className="form_main">
      {user && 
      <>
      <Col xs={6} md={4}>
          <Image style={{width:"120px"}} src={user.image} roundedCircle />
        </Col>
      <h3>{user.name}</h3>
      <h6>{user.email}</h6>
      {/* <Button as = {Link} to ='/EditProfile'>Edit</Button> */}
      <Link  to ='/EditProfile'>
      <button style={{width:"150px"}} className='submit'  id="button">Edit</button>
      </Link>
      {/* <Button onClick={()=>dispatch(deleteProfile(user._id,navigate))}>Delete</Button> */}
      <>
      {/* <Button variant="primary" onClick={handleShow}>
        Delete
      </Button> */}
      <button style={{width:"150px"}} className='submit' onClick={handleShow}  id="button">Delete</button>
      
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>{dispatch(deleteProfile(user._id,navigate));handleClose()}}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
      
      </>
      
      }
    </div>
    </section>
  )
}

export default Profile
