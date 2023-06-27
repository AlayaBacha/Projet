import { useSelector } from "react-redux"
import Alert from 'react-bootstrap/Alert';
const Errors = () => {
    const errors = useSelector(state=> state.ErrorReducer)
  return (
    <div>
      {/* <Alert key={variant} variant={variant}>
          This is a {variant} alert—check it out!
        </Alert> */}
        {
            errors.map(el=> <Alert  variant='secondary'>
                {el.msg}
              </Alert>)
        }
    </div>
  )
}

export default Errors
