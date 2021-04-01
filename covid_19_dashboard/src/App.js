import React, {Component} from 'react'
import './App.css';
import Routes from './components/Routes';
import 'bootstrap/dist/css/bootstrap.min.css'


//React Router
import {
  HashRouter as Router,
} from 'react-router-dom'


class App extends Component {
 
  

  render(){
  
    
    return (

      
      <Router>
       
        <Routes />
      </Router>


    );
  }
}
export default App;


