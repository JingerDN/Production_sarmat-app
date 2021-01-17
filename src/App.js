
import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css';
import LanguageCheck from "./components/pages/LanguageCheck";


const App = (props) => {
 
  return (
       <Router>
        <LanguageCheck/>
       
       </Router>  
  );
}

export default App;
