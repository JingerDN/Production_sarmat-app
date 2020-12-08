import React from "react";
import '../../App.css';

function Mission(props) {
const{pageRows,pageList}=props;

const spanRows = pageRows.map((item,i)=>
        <div key={i} className={item.cName}>
            <span >{item.row}</span>
        </div>
    );

    const listItem=pageList.map((item,i)=>
        <li key={i} className={item.cName}>
            {item.row}
        </li>
    )

    return(
        <div className="page">
       {spanRows}
       <ul>{listItem}</ul>
       </div>
    
    )
}
export default Mission;