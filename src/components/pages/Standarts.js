import React from "react";
import {Link} from "react-router-dom";
import '../../App.css';
function Standarts(props) {
    const {pageRows,pageBottom,ancor}=props;

    const spanRows = pageRows.map((item,i)=>
        <div key={i} className={item.cName}>
            <span >{item.row}</span>
        </div>
    ); 
    const spanBottom=pageBottom.map((item,i)=>
    <div key={i} className={item.cName}>
        <span>{item.row}</span>
    </div>
    )



    const spanAncor=ancor.map((item,i)=>
        <div key={i} >
            <Link className={item.cName} to={item.path}>{item.row}</Link>
        </div>
    )
  
    return(
        <div className="page">
       {spanRows}
       <div className="box-start">{spanBottom}
       {spanAncor}</div>
       </div>
    )
}
export default Standarts;