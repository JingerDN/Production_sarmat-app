import React from "react";
import {Link} from "react-router-dom";


import '../../App.css';

function About(props) {
    const {pageRows,shippingList,pageRowsMdl,pageList,pageBottom,ancorRate,pageRowsEnd}=props;


    const spanRows = pageRows.map((item,i)=>
        <div key={i} className={item.cName}>
            <span >{item.row}</span>
        </div>
    );

    const shipplistItem=shippingList.map((item,i)=>
        <li key={i} className={item.cName} >
            {item.row}
        </li>
    )
    const spanRowsMdl = pageRowsMdl.map((item,i)=>
        <div key={i} className={item.cName}>
            <span >{item.row}</span>
        </div>
    );

    const listItem=pageList.map((item,i)=>
        <li key={i}className={item.cName}>
            {item.row}
        </li>
    )

    const spanBottom=pageBottom.map((item,i)=>
    <div key={i} className={item.cName}>
        <span>{item.row}</span>
    </div>
    )

    const spanAncorRate= ancorRate.map((item,i)=>
    <div key={i} >
    <Link className={item.cName} to={item.path}>{item.row}</Link>
    </div>
    )


    const spanRowsEnd=pageRowsEnd.map((item,i)=>
    <div key={i} className={item.cName}>
    <span>{item.row}</span>
    </div>
    )

  

    
    return(
        <div className="page">
         {spanRows}
         <ul>{shipplistItem}</ul>
         {spanRowsMdl}
         <ul>{listItem}</ul>
         {spanBottom}
         {spanAncorRate}
         {spanRowsEnd}
       </div>
       
    )
}
export default About;








