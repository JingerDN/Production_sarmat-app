import React from "react";
import '../../App.css';


function Main(props) {
   const {pageRows,pageList,pageBottom}=props;

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
return(
    <div className="page main">
     {spanRows}
      <ul>{listItem}</ul>
      {spanBottom}
   </div>

)
}
export default Main;