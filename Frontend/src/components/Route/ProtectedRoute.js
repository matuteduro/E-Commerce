import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet, Route } from "react-router-dom";

const ProtectedRoute = () => {
    const { loading, isAuthenticated, user } = useSelector(state => state.user)
    
    let auth = {'token':false}
    return(
        isAuthenticated ? <Outlet/> : <Navigate to="/login"/>
    )
};

export default ProtectedRoute;