import React from "react";
import { useSelector } from "react-redux";
import { Navigate} from "react-router-dom";

const ProtectedRoute = ({isAdmin}) => {
    const {isAuthenticated, user} = useSelector((state)=>state.user)
    if (isAuthenticated === false){
    return <Navigate to="/login"/>
}
    if (isAdmin === true && user.role !== "admin"){
        return <Navigate to="/login"/>
    }

    
    
}

export default ProtectedRoute;
