import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { current, logout } from '../Redux/Actions/AuthActions';
import { useEffect } from 'react';
import { buttonStyles, navstyle } from './Styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faRightFromBracket, faRightToBracket, faUserPlus, faUsers } from '@fortawesome/free-solid-svg-icons';
import { faClipboard, faSquarePlus, faUser } from '@fortawesome/free-regular-svg-icons';

const NavUser = () => {
  useEffect(()=>{
    dispatch(current())
},[]) 
  const token = localStorage.getItem('token')
  const user = useSelector(state=>state.AuthReducer.user)
 const dispatch = useDispatch()
  const navigate = useNavigate()
  return (
    <>
    <Navbar className='nav d-flex' bg="white" >
    <Container>
      <Navbar.Brand   href="#home">PlaceRate</Navbar.Brand>
      <Nav className="me-auto">
        
        
        

        {
          token && user?.role == "admin" ?
          <>
          <div className='cc'>
          <Nav.Link  style={buttonStyles} as={Link} to='/' > <FontAwesomeIcon icon={faHouse} />Home</Nav.Link>
          </div>
            <Nav.Link style={buttonStyles} as={Link} to='/Profile'><FontAwesomeIcon icon={faUser} />Profile</Nav.Link>
            <Nav.Link style={buttonStyles} as={Link} to='/ListUsers' ><FontAwesomeIcon icon={faUsers} />Users</Nav.Link>
            <Nav.Link style={buttonStyles} as={Link} to='/AllPosts' ><FontAwesomeIcon icon={faClipboard} />Posts</Nav.Link>
            <Nav.Link style={buttonStyles} as={Link} to='/MyPosts' ><FontAwesomeIcon icon={faClipboard} />My Posts</Nav.Link>
            <Nav.Link style={buttonStyles} as={Link} to='/AddPost' ><FontAwesomeIcon icon={faSquarePlus} />AddPost</Nav.Link>
            <Nav.Link style={buttonStyles} onClick={()=>{dispatch(logout());navigate('/')}}><FontAwesomeIcon icon={faRightFromBracket} />LogOut</Nav.Link>
            
          </>
          :
          token && user?.role == "client" ?
          <>
          <div className='bb'>
          <Nav.Link style={buttonStyles} as={Link} to='/'  ><FontAwesomeIcon icon={faHouse} />Home</Nav.Link>
           </div>
            <Nav.Link style={buttonStyles} as={Link} to='/Profile'><FontAwesomeIcon icon={faUser} />Profile</Nav.Link>
            <Nav.Link style={buttonStyles} as={Link} to='/AllPosts' ><FontAwesomeIcon icon={faClipboard} />Posts</Nav.Link>
            <Nav.Link style={buttonStyles} as={Link} to='/MyPosts' ><FontAwesomeIcon icon={faClipboard} />My Posts</Nav.Link>
            <Nav.Link style={buttonStyles} as={Link} to='/AddPost' > <FontAwesomeIcon icon={faSquarePlus} />AddPost</Nav.Link>
            <Nav.Link style={buttonStyles} onClick={()=>{dispatch(logout());navigate('/')}}><FontAwesomeIcon icon={faRightFromBracket} />LogOut</Nav.Link>
            
          </>
          :
          <>
          <div className='aa'>
          <Nav.Link  style={buttonStyles} as={Link} to='/' ><FontAwesomeIcon icon={faHouse} />Home</Nav.Link>
          </div>
            <Nav.Link style={buttonStyles} as={Link} to='/Register'><FontAwesomeIcon icon={faUserPlus} />Register</Nav.Link>
            <Nav.Link style={buttonStyles} as={Link} to='/Login'><FontAwesomeIcon icon={faRightToBracket} />LogIn</Nav.Link>
            
          </>
        }

        
        
      </Nav>
    </Container>
  </Navbar>
  </>
  )
}

export default NavUser
