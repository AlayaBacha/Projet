import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { editValid } from '../../Redux/Actions/PostsAction';
import { current } from '../../Redux/Actions/AuthActions';
import { useEffect } from 'react';

const CradPost = ({el}) => {

    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(current())
      },[dispatch])
   
       const user = useSelector(state=>state.AuthReducer.user)
  return (
    <div >
       
            {/* <h2>{el.owner.name}</h2>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={el.image} />
      <Card.Body>
      <Link to={`/DescriptionPost/${el._id}`}><Card.Title>{el.title}</Card.Title>  </Link>
        <Card.Text>
        {el.date}
          {el.description}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>{el.adresse}</ListGroup.Item>
      </ListGroup>
      {
        user.role == "admin" &&  <Button onClick={()=> dispatch(editValid({valid : !el.valid},el._id))} variant={el.valid ? "success" : "danger"} >{el.valid ? "Annuler" : "Valider"}</Button>
      }
     
    </Card> */}
      

      <div class="card">
                <img src={el.image} class="card-image"></img>
                <div className='post'>
                <Link to={`/DescriptionPost/${el._id}`}>
                <div class="category"> {el.title} </div>
                </Link>
                </div>
                <div class="heading"><h3>{el.description}</h3>
                <h5> <span class="name">{el.name}</span>{el.adresse}</h5>
                <div class="author"> {el.date}</div>
                </div>
              
              {
        user.role == "admin" &&  <Button onClick={()=> dispatch(editValid({valid : !el.valid},el._id))} variant={el.valid ? "success" : "danger"} >{el.valid ? "Annuler" : "Valider"}</Button>
      }
               </div>
    </div>
  )
}

export default CradPost
