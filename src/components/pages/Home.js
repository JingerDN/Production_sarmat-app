import React from "react";
import Slider from "../Slider/index";
import {Link} from "react-router-dom";

import '../../App.css';


function Home(props) {
   
return(
    <div>
       <div> <Slider/></div>
      
      <Link className="get-rate" to="/get-rate">Please ask for an offer!</Link>
   
   </div>

)
}
export default Home;