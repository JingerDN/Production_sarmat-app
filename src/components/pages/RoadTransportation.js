import React from "react";
import {Link} from "react-router-dom";

import '../../App.css';

function RoadTransportation(props) {
    const {pageRows,pageList,pageBottom,pageRowsInternRoadStart,ancorMail,
        pageRowsMdl,pageListMdl}=props;
   
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
        const spanMiddle=pageRowsMdl.map((item,i)=>
        <div key={i} className={item.cName}>
            <span>{item.row}</span>
        </div>
        )

        const listItemMdl=pageListMdl.map((item,i)=>
        <li key={i} className={item.cName}>
            {item.row}
        </li>
        )


        const spanBottom=pageBottom.map((item,i)=>
        <div key={i} className={item.cName}>
            <span>{item.row}</span>
        </div>
        )
    
        const spanRowsInternRoadStart=pageRowsInternRoadStart.map((item,i)=>
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
            {spanMiddle}
            <ul>{listItemMdl}</ul>
            {spanBottom}
            <div className="box-start">{spanRowsInternRoadStart}{spanAncorMail}</div>
           </div>
        )
}
export default RoadTransportation;