import React from "react";
import "../components/Button.css";

export default function Button(props){
    const {handleLanguage,activeDeu,activeEng,activeRus}=props;
    return(
        <div className="lang" >
        <button data-lang="DEU"  onClick={handleLanguage} className={activeDeu?"lang-active":"lang-off"}>{activeDeu ?"Deu":(activeEng?"Ger":"Нем")}</button>
        <button data-lang="ENG"  onClick={handleLanguage} className={activeEng?"lang-active":"lang-off"}>{activeEng?"Eng":(activeDeu?"Eng":"Анг")}</button>
        <button data-lang="RUS"  onClick={handleLanguage} className={activeRus?"lang-active":"lang-off"}>{activeRus?"Рус":(activeEng?"Rus":"Rus")}</button>
        </div>
    )
}
