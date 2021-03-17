import React, {Component} from 'react'
import './App.css';
//import Test from './components/test/Test'
import Routes from './components/Routes';



//React Router
import {
  BrowserRouter as Router,
} from 'react-router-dom'


class App extends Component {
 
  // state = {
  //   countries: [],
  //   isLoaded: true
  // }

  // // Loads the page.
  // componentDidMount(){
  //   const isLoaded = this.state.isLoaded;
  //   if(isLoaded){
  //       this.fetchData()
  //   } else {
  //       console.log(`Error.Try again.`)
  //   }      
  // }

  // // Fetches the data.
  // fetchData(){

  //   this.setState({
  //     isLoaded: true,
  //     countries:[]
  //   })


  //   // Fetches the states from the Api
  //   fetch('https://disease.sh/v3/covid-19/countries',{
  //     header: 'access-control-allow-origin: *'
  //   })
  //   .then(response => response.json())
  //   .then(parsedJSON => parsedJSON.map(countries =>({
  //     country: `${countries.country}`,
  //     countryInfo: `${countries.countryInfo.flag}`,
  //     todayCases: `${countries.todayCases}`,
  //     todayRecovered: `${countries.todayRecovered}`,
  //     todayDeaths: `${countries.todayDeaths}`,
  //     active: `${countries.active}`,
  //     critical: `${countries.critical}`
  //     }
  //   )))
  //   .then(countries => this.setState({
  //     countries, 
  //     isLoaded:false
  //   }))
  //   .catch(error => console.log('parsing failed', error))
  // }

  render(){
    // const {countries, isLoaded} = this.state;
    
    return (
      // <div className="App">
      //   <h1>Covid-19 Tracker</h1>
      //   {
      //     !isLoaded && countries.length > 0 ? countries.map((countries, i) => {
      //       const {country, countryInfo,  cases, todayCases, recovered, todayRecovered, deaths, todayDeaths, active, critical} = countries;
      //     return <Test  key={i} country={country} countryInfo={countryInfo} cases={cases} todayCases={todayCases} recovered={recovered} todayRecovered={todayRecovered} deaths={deaths} todayDeaths={todayDeaths} active={active} critical={critical} />
      //     }) : null
      //   } 
      // </div>
      
      <Router>
       
        <Routes />
      </Router>


    );
  }
}
export default App;


