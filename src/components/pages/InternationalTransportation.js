import React from "react";
import '../../App.css';
import {Link} from "react-router-dom";

function InternationalTransportation(props) {
const {pageRows,pageList,ancorAir,pageRowsInternAir,pageRowsInternAirStart,ancorMail,
    ancorSea,pageRowsInternSea,pageListIntSea,pageRowsFinal,ancorRoad,pageRowsInternRoad,
    ancorMulti, pageRowsInternMulti}=props;

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

    const spanAncorAir= ancorAir.map((item,i)=>
    <div key={i} >
        <Link className={item.cName} to={item.path}>{item.row}</Link>
    </div>
    )

    const spanRowsInternAir=pageRowsInternAir.map((item,i)=>
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

    const spanAncorSea= ancorSea.map((item,i)=>
    <div key={i} >
        <Link className={item.cName} to={item.path}>{item.row}</Link>
    </div>
    )

    const spanRowsInternSea=pageRowsInternSea.map((item,i)=>
    <div key={i} className={item.cName}>
        <span>{item.row}</span>
    </div>
    )
    const listItemSea=pageListIntSea.map((item,i)=>
    <li key={i} className={item.cName}>
        {item.row}
    </li>
    )
    const spanRowsFinal=pageRowsFinal.map((item,i)=>
    <div key={i} className={item.cName}>
       <span>{item.row}</span>
    </div>
    )
    const spanAncorRoad= ancorRoad.map((item,i)=>
    <div key={i} >
        <Link className={item.cName} to={item.path}>{item.row}</Link>
    </div>
    )

    const spanRowsInternRoad=pageRowsInternRoad.map((item,i)=>
    <div key={i} className={item.cName}>
        <span>{item.row}</span>
    </div>
    )

    const spanAncorMulti= ancorMulti.map((item,i)=>
    <div key={i} >
        <Link className={item.cName} to={item.path}>{item.row}</Link>
    </div>
    )

    const spanRowsInternMulti=pageRowsInternMulti.map((item,i)=>
    <div key={i} className={item.cName}>
        <span>{item.row}</span>
    </div>
    )


  


return(
    <div className='page'>
        {spanRows}
        <ul>{listItem}</ul>
        {spanAncorAir}
        {spanRowsInternAir}
        <div className="box-start">{spanRowsInternAirStart}{spanAncorMail}</div>
        {spanAncorSea}
        {spanRowsInternSea}
        {listItemSea}
        {spanRowsFinal}
        <div className="box-start">{spanRowsInternAirStart}{spanAncorMail}</div>
        {spanAncorRoad}
        {spanRowsInternRoad}
        <div className="box-start">{spanRowsInternAirStart}{spanAncorMail}</div>
        {spanAncorMulti}
        {spanRowsInternMulti}
        <div className="box-start">{spanRowsInternAirStart}{spanAncorMail}</div>
    </div>
)
}
export default InternationalTransportation;