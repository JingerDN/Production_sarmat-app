import React from "react";
import {Link} from "react-router-dom";
import '../../App.css';

function AirFreight(props) {
const {imgAirFreight,pageRowsInternAirStart,ancorMail,pageRows,pageList,pageBottom}=props;
   
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
    const spanBottom=pageBottom.map((item,i)=>
    <div key={i} className={item.cName}>
        <span>{item.row}</span>
    </div>
    )

const spanRowsInternAirStart=pageRowsInternAirStart.map((item,i)=>
    <div key={i} className={item.cName}>
        <span>{item.row}</span>
    </div>
    )

    const spanAncorMail= ancorMail.map((item,i)=>
    <div key={i} >
        <Link className={item.cName} to={item.path}>{item.row}</Link>
    </div>
    )

    return(
        <div className="page">
         {spanRows}
         <ul>{listItem}</ul>
        {spanBottom}
        <div className="box-start">{spanRowsInternAirStart}{spanAncorMail}</div>
       </div>
    )
}
export default AirFreight;