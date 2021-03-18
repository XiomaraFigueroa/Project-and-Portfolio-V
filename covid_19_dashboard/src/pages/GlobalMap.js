import React, {Component} from 'react';
import BarChart from '../components/barChart/BarChart';
import Header from '../components/header/Header';
import CountryNav from '../components/nav/CountryNav'
import Footer from '../components/footer/Footer';


class GlobalMap extends Component{
  state = {
    data: [12, 5, 6, 6, 9, 10, 15], // Need to add the Api data.
    width: 1050,
    height: 350,
    countries: [],
    isLoaded: true,
    title: 'Global Map',
    to: '/USMap',
    option: 'US Map',
    cardTitle: 'this is a test',
    cardInfo: 'this is another test'
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
    fetch('https://disease.sh/v3/covid-19/countries')
    .then(response => response.json())
    .then(parsedJSON => parsedJSON.map(countries =>({
        deaths: `${countries.deaths}`,
        country: `${countries.country}`,
        countryInfo: `${countries.countryInfo.flag}`,

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
        <Header title={this.state.title} option={this.state.option} to={this.state.to}  />

        
        
        <h1 style={styles.h1} >Cases from the Last 7 Days</h1>

        <div className='mainSection' style={styles.mainSection} >
            <section style={styles.listSection} className='listSection' >

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
            <div className='chartSection' style={styles.chartSection} >
              <BarChart  data={this.state.data} width={this.state.width} height={this.state.height} id={this.state.id} cardTitle={this.state.cardTitle} cardInfo={this.state.cardInfo} />
            </div>
        </div>
        
        
        
        
       <Footer />
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
    height:'43rem',
    overflow: 'scroll',
  
  },
  h1: {
    textAlign: 'center',
    color: '#fff',
    marginTop: '2rem',
    fontSize: '2rem'
  },
  h2:{
    color: '#fff'
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
    display: 'flex',
    flexWrap: 'wrap-reverse',
    justifyContent: 'center',
  }
  
  
}