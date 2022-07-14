import React, { Fragment, useState } from 'react';
import "./Header.css";
import { SpeedDial, SpeedDialAction } from '@mui/material';
import Backdrop from '@mui/material/Backdrop';
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import PersonIcon from '@mui/icons-material/Person';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import ListAltIcon from '@mui/icons-material/ListAlt';
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
import { useNavigate } from 'react-router-dom';
import {useAlert} from "@blaumaus/react-alert"
import {logout} from "../../../actions/userAction"
import {useDispatch, useSelector} from "react-redux"

const UserOptions = ({user}) => {
    const {cartItems} = useSelector((state) => state.cart)
    const [open, setOpen] = useState(false)
    const navigate = useNavigate();
    const alert = useAlert();
    const dispatch = useDispatch();

    const options = [
        {icon: <ListAltIcon/>, name: "Orders", func: orders },
        {icon: <PersonIcon/>, name: "Profile", func: account },
        {icon: <ShoppingCartIcon style={{color:cartItems.length>0? "green" : "unset"}}/>, name: `Cart(${cartItems.length})`, func:cart},
        {icon: <ExitToAppIcon/>, name: "Logout", func: logoutUser },
   ];

   if(user.role==="admin"){
    options.unshift({
        icon:<DashboardCustomizeIcon/>,
        name: "Dashboard",
        func: dashboard,
    })
   }
   function dashboard(){
    navigate("/admin/dashboard")
   }

   function orders(){
    navigate("/orders");
   }
   function account(){
    navigate("/account");
   }
   function cart(){
    navigate("/cart");
   }
   function logoutUser(){
    dispatch(logout());
    alert.success("Logout Successfully")
   }
return(
  <Fragment>
    <Backdrop open={open} style={{zindex: "10"}}/>
    <SpeedDial
        ariaLabel="SpeedDial tooltip"
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        style={{zIndex:"11"}}
        open={open}
        direction="down"
        className="speedDial"   
        icon={ <img className="speedDialIcon" src={user.avatar.url ? user.avatar.url : "/Profile.png"} alt="Profile" />}
    >
        {options.map((item) =>(
        <SpeedDialAction 
        key={item.name}
        icon={item.icon} tooltipTitle={item.name} onClick={item.func} tooltipOpen={window.innerWidth<=600?true:false}/>
        ))}
    </SpeedDial>
  </Fragment>
  )
}

export default UserOptions