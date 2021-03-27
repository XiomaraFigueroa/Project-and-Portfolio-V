import React, {Component} from 'react';
import BarChart from '../components/barChart/BarChart';
import Header from '../components/header/Header';
import StateNav from '../components/nav/StateNav'
import Footer from '../components/footer/Footer'
import InfoCard from '../components/card/InfoCard';


class USMap extends Component{
  state = {
    data: [12, 5, 6, 6, 9, 10, 15], // Need to add the Api data.
    width: 1050,
    height: 350,
    states: [],
    isLoaded: true,
    title: 'US Map',
    to: '/GlobalMap',
    option: 'Global Map',
    covid_world: []
  }
  // Loads the page.
  componentDidMount(){
    const isLoaded = this.state.isLoaded;
    if(isLoaded){
        this.fetchData();
        this.fetchAll();
    } else {
        console.log(`Error.Try again.`)
    }      
  }
  
  fetchAll(){
    this.setState({
      covid_world:[],
      
    })
     // Put the new fetch info here.
     fetch('https://disease.sh/v3/covid-19/countries/United%20States?strict=true')
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
      states:[]
    })


    // Fetches the states from the Api
    fetch('https://disease.sh/v3/covid-19/states')
    .then(response => response.json())
    .then(parsedJSON => parsedJSON.map(states =>({
        cases: `${states.cases}`,
        state: `${states.state}`,

        population: `${states.population}`,
        updated: `${states.updated}`,
        todayCases: `${states.todayCases}`,
        todayDeaths: `${states.todayDeaths}`,
        recovered: `${states.recovered}`,
        active: `${states.active}`,
      }
    )))
    .then(states => this.setState({
      states, 
      isLoaded:false
    }))
    .catch(error => console.log('parsing failed', error))
    // Put the new fetch info here.
   

 
  }
    
  render(){
    const {states, isLoaded} = this.state;

    return(
      <div className='main' style={styles.container} >
        <Header title={this.state.title} option={this.state.option} to={this.state.to} />
        
        <h1 style={styles.h1} >Cases from the Last 7 Days</h1>
        
        <section className='mainSection' style={styles.mainSection} >
            <section style={styles.listSection} className='listSection' >
                <h2 style={styles.h2} >Top 50 Confirmed Cases by County</h2>
            
                <div style={styles.list} className='list' >
                
                  {
                      !isLoaded && states.length > 0 ? states.map((states, i) => {
                      const {state,  cases, population, updated, todayCases, todayDeaths,recovered, active } = states;
                      return <StateNav style={styles.list} key={i} cases={cases} state={state.toUpperCase()} 
                      population={population} updated={updated} todayCases={todayCases}  todayDeaths={todayDeaths} recovered={recovered}
                      active={active} />
                      }) : null
                  } 
                </div>
          </section>
           
           <section className='chartSection' style={styles.chartSection} >
              <BarChart  data={this.state.data} width={this.state.width} height={this.state.height}  /> 
          
              <section className='infoSection' style={styles.infoSection}>
 
                <InfoCard world={this.state.covid_world} />

              </section>
          </section>
        </section>

        <Footer />
       
      </div>
         
    );
  }

}
export default USMap;

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
    justifyContent: 'space-evenly'
  },

  
  
  list: {
    width: '100%',
    overflow: 'scroll',
    height: '100%'
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
      border: '2px solid #212121',
      maxHeight: '45rem',
      padding: '2rem',
      width: '25%'
  },
  chartSection: {
    position: 'relative',
    display: 'flex',
    flexWrap: 'wrap-reverse',
    justifyContent: 'center',
    width: '75%',
    
  },
  infoSection: {
    position: 'relative',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    
  }
  
  
  
}