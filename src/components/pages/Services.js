import React from "react";
import '../../App.css';
import {Link} from "react-router-dom";


function Services(props) {
    const {pageServicesStart,ancorMail,pageRows,pageBottom}=props;
   
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
    
    const spanServicesStart=pageServicesStart.map((item,i)=>
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
            {spanBottom}
            <div className="box-start">{spanServicesStart}{spanAncorMail}</div>
           </div>
        )
}
export default Services;
