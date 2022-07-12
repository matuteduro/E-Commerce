import React from 'react'
import {ReactNavbar} from "overlay-navbar"
import logo from "../../../images/logo.png"

const options={
  burgerColor:"black", 
    burgerColorHover:"white", 
    logo,
    logoWidth:"15vmax",
    navColor1:"#edecf0d1",
    logoHoverSize:"10px",
    logoHoverColor:"red",
    link1Text:"Home",
    link2Text:"Products",
    link3Text:"Contact",
    link4Text:"About",
    link1Url:"/",
    link2Url:"/products",
    link3Url:"/contact",
    link4Url:"/about",
    link1Size:"1.2vmax",
    link1Color:"rgba(189, 11, 224, 0.8)",
    nav1justifyContent:"flex-end",
    nav2justifyContent:"flex-end",
    nav3justifyContent:"flex-start",
    link1ColorHover:"#eb4034",
    link2ColorHover:"#eb4034",
    link3ColorHover:"#eb4034",
    link4ColorHover:"#eb4034",
    link1Margin:"1vmax",
    profileIconUrl: "/login",
    profileIconColor:"rgba(35, 35, 35, 0.8)",
    searchIconColor:"rgb(238, 54, 54)",
    cartIconColor:"rgba(35, 35, 35, 0.8)",
    profileIconColorHover:"#eb4034",
    searchIconColorHover:"#eb4034",
    cartIconColorHover:"#eb4034",
    cartIconMargin:"1vmax",
    link1Transition: "0.1",
    searchIconTransition: "0.2",
    cartIconTransition: "0.2",
    profileIconTransition: "0.2",

}

const Header = () => {
  return (
    <ReactNavbar{...options}/>
  )
}

export default Header