import React, {useState} from "react";
import {Link} from "react-router-dom";
import {useContext} from "react";
import { LanguageContext } from "../components/pages/LanguageContext";

import {MenuItemsAbout,engMenuItemsAbout} from "./MenuItemsAbout";
import {MenuItemsInternational,engMenuItemsInternational} from "./MenuItemsInternational";
import {MenuItemsServices,engMenuItemsServices} from "./MenuItemsServices";
import Dropdown from "./Dropdown";
import logo from "../images/logo/logo.png";
import "../images/logo/logo.css";
import "./Navbar.css";


function Navbar(){
    const valueLanguage = useContext(LanguageContext);

    const [click,setClick]=useState(false);
    const [dropdown, setDropdown]=useState(false);
   
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
                     <Link to="/" className="nav-links" onClick={closeMobileMenu} > {valueLanguage==="ENG"?"Home ": "Главная"}</Link>
                </li></div>
                <div><li className="nav-item" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} >
                <Link to="/about" className="nav-links" onClick={closeMobileMenu} >{valueLanguage==="ENG"?"About ": "О компании"}<i className="fas fa-caret-down"/>
                    {dropdown && valueLanguage==="ENG"?<Dropdown menuItems={engMenuItemsAbout}/>:dropdown && <Dropdown menuItems={MenuItemsAbout}/>}
                    </Link>
                </li></div>
                <div><li className="nav-item" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} >
                    <Link to="/international-transportation" className="nav-links" onClick={closeMobileMenu} >{valueLanguage==="ENG"?"International transportation ": "Международные перевозки"}<i className="fas fa-caret-down"/>
                    {dropdown && valueLanguage==="ENG"?<Dropdown menuItems={engMenuItemsInternational}/>:dropdown && <Dropdown menuItems={MenuItemsInternational}/> }
                    </Link>
                </li></div>
               <div> <li className="nav-item" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                    <Link to="/services" className="nav-links" onClick={closeMobileMenu} >{valueLanguage==="ENG"?"Services ": "Услуги"}<i className="fas fa-caret-down"/>
                    {dropdown && valueLanguage==="ENG"?<Dropdown menuItems={engMenuItemsServices}/>:dropdown && <Dropdown menuItems={MenuItemsServices}/>}
                    </Link>
                </li></div>
               <div> <li className="nav-item">
                    <Link to="/contacts" className="nav-links" onClick={closeMobileMenu} >{valueLanguage==="ENG"?"Contacts ": "Контакты"}</Link>
                </li></div>
              <div>  <li className="nav-item">
                    <Link to="/useful-links" className="nav-links" onClick={closeMobileMenu} >{valueLanguage==="ENG"?"Useful links ": "Полезные ссылки"}</Link>
                </li></div>
                </div>
            </ul>
        </nav>
        </div>
    )
}
export default Navbar;