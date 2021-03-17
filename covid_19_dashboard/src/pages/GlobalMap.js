import React, {Component} from 'react';
import BarChart from '../components/barChart/BarChart';
import Header from '../components/header/Header';
import CountryNav from '../components/nav/CountryNav'



class GlobalMap extends Component{
  state = {
    data: [12, 5, 6, 6, 9, 10, 15], // Need to add the Api data.
    width: 1000,
    height: 500,
    id: 'root',
    countries: [],
    isLoaded: true,
    title: 'Global Map'
    
      
  }
  // Loads the page.
  componentDidMount(){
    const isLoaded = this.state.isLoaded;
    if(isLoaded){
        this.fetchData()
    } else {
        console.log(`Error.Try again.`)
    }      
  }

  // Fetches the data.
  fetchData(){

    this.setState({
      isLoaded: true,
      countries:[]
    })


    // Fetches the states from the Api
    fetch('https://disease.sh/v3/covid-19/countries',{
      header: 'access-control-allow-origin: *'
    })
    .then(response => response.json())
    .then(parsedJSON => parsedJSON.map(countries =>({
        deaths: `${countries.deaths}`,
        country: `${countries.country}`,
        countryInfo: `${countries.countryInfo.flag}`,
        todayCases: `${countries.todayCases}`,
        todayRecovered: `${countries.todayRecovered}`,
        todayDeaths: `${countries.todayDeaths}`,
        active: `${countries.active}`,
        critical: `${countries.critical}`
      }
    )))
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
        <Header title={this.state.title}/>
        <h1 style={styles.h1} >Cases from the Last 7 Days</h1>
        <div className='mainSection' style={styles.mainSection} >
          <section className='countrySection' >
            <h2 style={styles.h2} >Cases by Country</h2>
            
            <div style={styles.list} className='list' >
              
              {
                  !isLoaded && countries.length > 0 ? countries.map((countries, i) => {
                  const {country, countryInfo,  deaths, } = countries;
                  return <CountryNav style={styles.list} key={i} deaths={deaths} country={country.toUpperCase()} countryInfo={countryInfo}  /> 
                  }) : null
                } 
            </div>
          </section>
          <BarChart  data={this.state.data} width={this.state.width} height={this.state.height} id={this.state.id} />

        </div>
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
    display: 'flex'
  },
  
  list: {
    marginLeft: '2rem',
    marginRight: '2rem',
    width: '28rem',
    height:'60rem',
    overflow: 'scroll',
    border: '2px solid #212121'
   
  },
  h1: {
    textAlign: 'center',
    color: '#fff',
    marginTop: '2rem',
    fontSize: '2rem'
  },
  h2:{
    color: '#fff',
    textAlign: 'center',
  },
  
  
}