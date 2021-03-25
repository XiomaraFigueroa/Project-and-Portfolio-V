import React, {Component} from 'react';
import BarChart from '../components/barChart/BarChart';
import Header from '../components/header/Header';
import CountryNav from '../components/nav/CountryNav'
import Footer from '../components/footer/Footer';
import InfoCard from '../components/card/InfoCard'

class GlobalMap extends Component{
  state = {
    //data: [12, 5, 6, 6, 9, 10, 15], // Need to add the Api data.
    data: [],
    width: 1050,
    height: 350,
    countries: [],
    isLoaded: true,
    title: 'Global Map',
    to: '/USMap',
    option: 'US Map',
    covid_world:[],
    
  }
  // Loads the page.
  componentDidMount(){
    const isLoaded = this.state.isLoaded;
    if(isLoaded){
        this.fetchData();
        this.fetchAll();
        this.fetchDataForBar();
        
    } else {
        console.log(`Error.Try again.`)
    }      
  }
  // Fetches the data.
  fetchDataForBar(){ //============ NEED TO WORK ON THIS PART ===========//
    this.setState({
      data:[],
      
    })
     // Fetch 7 day history for all countries
     fetch('https://disease.sh/v3/covid-19/historical/all?lastdays=7')
     .then(response => response.json())
     .then(data => (
      this.setState(
          {
              data : data
          }
      )
  ))
      .catch(error => console.log('parsing failed', error))
  }

  // Api for Cards
  fetchAll(){
    this.setState({
      covid_world:[],
      
    })
     // Fetch world
     fetch('https://disease.sh/v3/covid-19/all')
     .then(response => response.json())
     .then(data => (
         this.setState(
             {
                 covid_world : data
             }
         )
     ))
    .catch(error => console.log('parsing failed', error))

    
  }


  // Fetches the data.
  fetchData(){

    this.setState({
      isLoaded: true,
      countries:[],
      
    })

      // Fetches the countries from the Api
      fetch('https://disease.sh/v3/covid-19/countries')
      .then(response => response.json())
      .then(parsedJSON => parsedJSON.map(countries =>({
          cases: `${countries.cases}`,
          country: `${countries.country}`,
          countryInfo: `${countries.countryInfo.flag}`,
          
          population: `${countries.population}`,
          updated: `${countries.updated}`,
          todayCases: `${countries.todayCases}`,
          todayDeaths: `${countries.todayDeaths}`,
          todayRecovered: `${countries.todayRecovered}`,
          active: `${countries.active}`,
          
      })))
      .then(countries => this.setState({
        countries, 
        isLoaded:false
      }))
        
      .catch(error => console.log('parsing failed', error))
  }

  
  
 
  render(){
    const {countries, isLoaded} = this.state;

    
    return(
      <div className='main' style={styles.container} >
        <Header title={this.state.title} option={this.state.option} to={this.state.to}  />

        <h1 style={styles.h1} >Cases from the Last 7 Days</h1>

        <div className='mainSection' style={styles.mainSection} >
            <section style={styles.listSection} className='listSection' >

                <h2 style={styles.h2} >Cases by Country</h2>
            
                <div style={styles.list} className='list' >
                
                {
                    !isLoaded && countries.length > 0 ? countries.map((countries, i) => {
                    const {country, countryInfo,  cases, population, updated, todayCases, todayDeaths, todayRecovered, active} = countries;
                    return <CountryNav style={styles.list} key={i} cases={cases} country={country.toUpperCase()} countryInfo={countryInfo}
                    population={population} updated={updated} todayCases={todayCases}  todayDeaths={todayDeaths} todayRecovered={todayRecovered}
                    active={active} />  
                    }) : null
                } 
                </div>
            </section>
            <section className='chartSection' style={styles.chartSection} >

            
              {/* NEED TO WORK ON THIS PART */}
              <BarChart  data={this.state.data} width={this.state.width} height={this.state.height}  />
              
              <section className='infoSection' style={styles.infoSection}> 

                <InfoCard world={this.state.covid_world} />

              </section>
            </section>
        </div>
        
        
        
                
        <Footer world={this.state.covid_world} />
      </div>

        
    );
  }

}
export default GlobalMap;


const styles ={
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '100%',
    backgroundColor: '#000'
  },
  mainSection: {
    position: 'relative',
    display: 'flex',
  },
  
  list: {
    marginLeft: '2rem',
    marginRight: '2rem',
    width: '28rem',
    height:'45rem',
    overflow: 'scroll',
  
  },
  h1: {
    textAlign: 'center',
    color: '#fff',
    marginTop: '2rem',
    fontSize: '2rem',
    fontFamily: 'Roboto, san-serif'
  },
  h2:{
    color: '#fff',
    fontFamily: 'Roboto, san-serif'
  },
  listSection: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      border: '2px solid #212121'
  },
  chartSection: {
    position: 'relative',
    display: 'flex',
    flexWrap: 'wrap-reverse',
    justifyContent: 'center',
    maxWidth: '75rem',
    
  },
  infoSection: {
    position: 'relative',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    
   
  }
  
  
  
}