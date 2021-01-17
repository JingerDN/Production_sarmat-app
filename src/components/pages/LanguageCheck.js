import React, {useState} from "react";
import { LanguageContext } from "./LanguageContext";
import {useRoutes} from "./routes";
import Navbar from "../Navbar"
import Footer from "../pages/Footer"
import Button from "../Button";


const LanguageCheck=(props)=>{
let [language,setLanguage]=useState("ENG");

let [activeEng,setEng]=useState(true);
let [activeRus,setRus]=useState(false);
let [activeDeu,setDeu]=useState(false);

const routes = useRoutes(language);

const handleLanguage=(e,language)=>{
setLanguage(e.target.dataset.lang,language);
e.persist();
if(e.target.dataset.lang==="DEU"){
    setDeu(true);
    setRus(false);
    setEng(false);
}
else if(e.target.dataset.lang==="ENG"){
    setDeu(false);
    setRus(false);
    setEng(true);
}
else if(e.target.dataset.lang==="RUS"){
    setDeu(false);
    setRus(true);
    setEng(false);
}}

    return(
   <div>
        <Button handleLanguage={handleLanguage} activeDeu={activeDeu} activeEng={activeEng} activeRus={activeRus}/>
        <LanguageContext.Provider value={language}>
          <Navbar/>
          
         {routes} 
         <Footer/>
       
        </LanguageContext.Provider>
   </div>
    ) 
}

export default LanguageCheck;