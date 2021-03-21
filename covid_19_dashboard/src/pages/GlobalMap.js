import React, {Component} from 'react';
import BarChart from '../components/barChart/BarChart';
import Header from '../components/header/Header';
import CountryNav from '../components/nav/CountryNav'
import Footer from '../components/footer/Footer';


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
    cardTitle: 'Coming Soon',
    
  }
  // Loads the page.
  componentDidMount(){
    const isLoaded = this.state.isLoaded;
    if(isLoaded){
        this.fetchData();
        this.fetchDataForBar();
    } else {
        console.log(`Error.Try again.`)
    }      
  }

    // Fetches the data.
    fetchDataForBar(){
      this.setState({
        isLoaded: true,
        data:[]
      })
      // Fetches the countries from the Api
      fetch('https://disease.sh/v3/covid-19/historical/all?lastdays=7')
      .then(response => response.json())
      .then(parsedJSON => parsedJSON.map(data =>({
          cases: `${data.cases}`,
      })))
      .then(data => this.setState({
        data,
        isLoaded:false
      }))
      .catch(error => console.log('parsing failed', error))
    }

  // Fetches the data.
  fetchData(){

    this.setState({
      isLoaded: true,
      countries:[]
    })


    // Fetches the countries from the Api
    fetch('https://disease.sh/v3/covid-19/countries')
    .then(response => response.json())
    .then(parsedJSON => parsedJSON.map(countries =>({
        cases: `${countries.cases}`,
        country: `${countries.country}`,
        countryInfo: `${countries.countryInfo.flag}`
    })))
    .then(countries => this.setState({
      countries, 
      isLoaded:false
    }))
      
    .catch(error => console.log('parsing failed', error))

  }
  
 
  render(){
    const {countries, data, isLoaded} = this.state;

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
                    const {country, countryInfo,  cases} = countries;
                    return <CountryNav style={styles.list} key={i} cases={cases} country={country.toUpperCase()} countryInfo={countryInfo}  />
                    }) : null
                } 
                </div>
            </section>
            <div className='chartSection' style={styles.chartSection} >

              {
                    !isLoaded && data.length > 0 ? data.map((data, i) => {
                    const cases = data;
                    return <BarChart key={i}  data={cases} width={this.state.width} height={this.state.height} cardTitle={this.state.cardTitle} /> 
                    }) : null
                }

              {/* <BarChart  data={this.state.data} width={this.state.width} height={this.state.height} cardTitle={this.state.cardTitle} /> */}

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