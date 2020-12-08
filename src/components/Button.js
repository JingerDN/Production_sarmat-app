import React from "react";
import {Link} from "react-router-dom";

import "./Button.css";

export function Button(){
    return(
        <Link to="send">
            <button className="btn">Отправить</button>
        </Link>
    )
}
