
import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {useRoutes} from "./components/pages/routes";

import Navbar from "./components/Navbar";
import './App.css';


const App = (props) => {
  const routes = useRoutes(false);
  console.log(props);
  const language="eng"
  return (
    
       <Router>
       <Navbar language={language}/> 
        {routes}
       </Router>
    
  );
}

export default App;
