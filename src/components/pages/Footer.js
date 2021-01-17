import React from "react";
import {useContext} from "react";
import { LanguageContext } from "./LanguageContext";
import '../../App.css';

export  default function Footer(){

  const valueLanguage = useContext(LanguageContext)//ніде не використала ще
  console.log(valueLanguage);
 // const [lang,setLanguage]=useState(valueLanguage);

    return(
      <div className="footer">{valueLanguage==="ENG"?<span>© 2020 www.sarmat.de - Freight Forwarding Company. All Rights Reserved.</span>:(valueLanguage==="DEU"?<span>© 2020 www.sarmat.de - 
      Speditionsunternehmen. Alle Rechte vorbehalten.</span>:<span>© 2020 www.sarmat.de - 
Транспортно-экспедиторская компания. Все права защищены.</span>)}</div>
    )
}