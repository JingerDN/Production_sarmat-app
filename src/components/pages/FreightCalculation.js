import React from "react";
import {Link} from "react-router-dom";
import '../../App.css';


function FreightCalculation(props) {
    const {pageRows,pageList,pageBottom,pageRowsMiddle,pageMiddleCalcStart,ancorMail,ancorMiddle,
        pageRowsCalcStart,pageMiddleCalcEnd}=props;

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
     const spanRowsMiddle = pageRowsMiddle.map((item,i)=>
     <div key={i} className={item.cName}>
         <span >{item.row}</span>
     </div>
    )


    const spanMiddleCalcStart = pageMiddleCalcStart.map((item,i)=>
     <span key={i} className={item.cName}>
         <span >{item.row}</span>
     </span>
    )
    const spanAncorMiddle= ancorMiddle.map((item,i)=>
    <span key={i} className="stratch">
        <Link className={item.cName} to={item.path}>{item.row}</Link>
    </span>
    )
    const spanMiddleCalcEnd = pageMiddleCalcEnd.map((item,i)=>
    <span key={i} className={item.cName}>
        <span >{item.row}</span>
    </span>
   )


   const spanBottom=pageBottom.map((item,i)=>
   <div key={i} className={item.cName}>
       <span>{item.row}</span>
   </div>
   )

    const spanRowsCalcStart=pageRowsCalcStart.map((item,i)=>
    <span key={i} className={item.cName}>
        <span>{item.row}</span>
    </span>
    )

    const spanAncorMail= ancorMail.map((item,i)=>
    <span key={i} >
        <Link className={item.cName} to={item.path}>{item.row}</Link>
    </span>
    )
 
 return(
     <div className="page">
      {spanRows}
       <ul>{listItem}</ul>
       {spanRowsMiddle}
       {spanBottom}
       <div>{spanMiddleCalcStart}{spanAncorMiddle}{spanMiddleCalcEnd}</div>
       <div>{spanRowsCalcStart}{spanAncorMail}</div>
    </div>
 )
}
export default FreightCalculation;