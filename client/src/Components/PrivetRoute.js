import { Navigate } from "react-router-dom"

const PrivetRoute = ({children}) => {
  const token  = localStorage.getItem('token')  
  return (
    <div>
      {
        token ? children : Navigate('/')
      }
    </div>
  )
}

export default PrivetRoute
