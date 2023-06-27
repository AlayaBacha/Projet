import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/esm/Button';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteUser } from '../Redux/Actions/AuthActions';



const CardUser = ({el}) => {
    const dispatch = useDispatch()
  return (
    

    // <Card  style={{ width: '200px' , height:'200px' }}>
    // <Card.Img variant="top" src={el.image} />
    // <Card.Body>
    //   <Card.Title>{el.name}</Card.Title>
    //   <Card.Text>
    //     {el.email}
    //   </Card.Text>
    // </Card.Body>
    // <ListGroup className="list-group-flush">
    //   <ListGroup.Item>{el.age}</ListGroup.Item>
    //   <ListGroup.Item>{el.phone}</ListGroup.Item>
      
    // </ListGroup>
    // <Card.Body className='d-flex justify-content-around'>
    //   <Button  as = {Link} to ={`/EditUser/${el._id}`}>Edit</Button>
    //   <Button onClick={()=>dispatch(deleteUser(el._id))}>Delete</Button>
    // </Card.Body>
    // </Card>
    
<div className='uuu'>
  <form class="form_main" action="">
    <img src={el.image} style={{width:'100px' , borderRadius :'50%'}}></img>
    <p class="heading">{el.name}</p>
    <h3 class="job">{el.email}</h3>
    <h4 class="job">{el.age}</h4>
    <h6 class="job">{el.phone}</h6>
    
              
           
<Link to ={`/EditUser/${el._id}`}><button style={{width :"390px",height:"40px"}} className='submit'  id="button">Edit</button></Link>
<button  onClick={()=>dispatch(deleteUser(el._id))}  id="button">Delete</button>
   
</form>
</div>

  )
}

export default CardUser
