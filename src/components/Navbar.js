import React, {useState} from "react";
import {Link} from "react-router-dom";

import {Button} from "./Button";
import {MenuItemsAbout,engMenuItemsAbout} from "./MenuItemsAbout";
import {MenuItemsInternational,engMenuItemsInternational} from "./MenuItemsInternational";
import {MenuItemsServices,engMenuItemsServices} from "./MenuItemsServices";
import "./Navbar.css";
import Dropdown from "./Dropdown";
import logo from "../images/logo/logo.png";
import "../images/logo/logo.css"

function Navbar(props){
    const {language}=props;

    const [click,setClick]=useState(false);
    const [dropdown, setDropdown]=useState(false);
    const [lang,setLanguage]=useState(language);


    
    const handleClick=()=>setClick(!click);

    const closeMobileMenu=()=>setClick(false)

    const onMouseEnter=()=>{
        if(window.innerWidth<960) {
            setDropdown(true)      
        }
        else{
            setDropdown(true)
        }
    }
    const onMouseLeave=()=>{
        if(window.innerWidth<960) {
            setDropdown(false)      
        }
        else{
            setDropdown(false)
        }
    }

    return (
        <div className="wrapper">
        <nav className="navbar">
            <Link to="/" className="logo-bg" onClick={closeMobileMenu}>
            <img src={logo} className="logo" alt="logo" />
            </Link>
          
            <div className="menu-icon" onClick={handleClick}>
                <i className={click ? "fas fa-times": "fas fa-bars"}/>
            </div>
            <ul className={click ? "nav-menu active": "nav-menu"}>
                <div className="edit">
               <div> <li className="nav-item">
                     <Link to="/" className="nav-links" onClick={closeMobileMenu} > {lang==="eng"?"Main ": "Главная"}</Link>
                </li></div>
                <div><li className="nav-item" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} >
                <Link to="/about" className="nav-links" onClick={closeMobileMenu} >{lang==="eng"?"About ": "О компании"}<i className="fas fa-caret-down"/>
                    {dropdown && lang==="eng"?<Dropdown menuItems={engMenuItemsAbout}/>:dropdown && <Dropdown menuItems={MenuItemsAbout}/>}
                    </Link>
                </li></div>
                <div><li className="nav-item" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} >
                    <Link to="/international-transportation" className="nav-links" onClick={closeMobileMenu} >{lang==="eng"?"International transportation ": "Международные перевозки"}<i className="fas fa-caret-down"/>
                    {dropdown && lang==="eng"?<Dropdown menuItems={engMenuItemsInternational}/>:dropdown && <Dropdown menuItems={MenuItemsInternational}/> }
                    </Link>
                </li></div>
               <div> <li className="nav-item" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                    <Link to="/services" className="nav-links" onClick={closeMobileMenu} >{lang==="eng"?"Services ": "Услуги"}<i className="fas fa-caret-down"/>
                    {dropdown && lang==="eng"?<Dropdown menuItems={engMenuItemsServices}/>:dropdown && <Dropdown menuItems={MenuItemsServices}/>}
                    </Link>
                </li></div>
               <div> <li className="nav-item">
                    <Link to="/contacts" className="nav-links" onClick={closeMobileMenu} >{lang==="eng"?"Contacts ": "Контакты"}</Link>
                </li></div>
              <div>  <li className="nav-item">
                    <Link to="/useful-links" className="nav-links" onClick={closeMobileMenu} >{lang==="eng"?"Useful links ": "Полезные ссылки"}</Link>
                </li></div>
                </div>
            </ul>
        </nav>
        </div>
    )
}
export default Navbar;