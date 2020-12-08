import React from "react";
import {Link} from "react-router-dom"
import '../../App.css';

function DangerousGoods(props) {
    const {pageAdrStart,ancorMail,pageRows,pageList,pageBottom,titleAdr,pageRowsMiddleAdr,}=props;
   
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


        const spanTitleAdr=titleAdr.map((item,i)=>
        <div key={i} className={item.cName}>
       <span>{item.row}</span>
       </div>
       )
        const spanRowsMiddleAdr=pageRowsMiddleAdr.map((item,i)=>
         <div key={i} className={item.cName}>
        <span>{item.row}</span>
        </div>
        )

       const spanBottom=pageBottom.map((item,i)=>
       <div key={i} className={item.cName}>
           <span>{item.row}</span>
       </div>
       )

        const spanAdrStart=pageAdrStart.map((item,i)=>
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
             {spanTitleAdr}
             {spanRowsMiddleAdr}
            {spanBottom}
            <div className="box-start">{spanAdrStart}{spanAncorMail}</div>
           </div>
        )
    

}
export default DangerousGoods;