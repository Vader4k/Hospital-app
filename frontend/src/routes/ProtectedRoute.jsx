import { useAuthContext } from "../context/AuthContext"
import { Navigate } from "react-router-dom"

const ProtectedRoute = ({children, allowedRoles}) => {

    const { token, role } = useAuthContext() 
    // eslint-disable-next-line react/prop-types
    const isAllowed = allowedRoles.includes(role)
    const accessibleRoutes = token && isAllowed ? children : <Navigate to='/login' replace={true} /> 

  return accessibleRoutes;
}

export default ProtectedRoute