import React from "react";
import {Link} from "react-router-dom";
import '../../App.css';

function About(props) {
    const {pageRows,pageList,pageBottom}=props;


    const spanRows = pageRows.map((item,i)=>
        <div key={i} className={item.cName}>
            <span >{item.row}</span>
        </div>
    );

    const listItem=pageList.map((item,i)=>
        <li key={i} >
            <Link className={item.cName} to={item.path}>{item.row}</Link>
        </li>
    )

    const spanBottom=pageBottom.map((item,i)=>
    <div key={i} className={item.cName}>
        <span>{item.row}</span>
    </div>
    )

    
    return(
        <div className="page">
         {spanRows}
         <ul>{listItem}</ul>
         {spanBottom}
       </div>
    )
}
export default About;








