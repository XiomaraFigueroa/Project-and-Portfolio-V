import React, {Component} from 'react';
import BarChart from '../components/barChart/BarChart';
import Header from '../components/header/Header';
import CountryNav from '../components/nav/CountryNav';
import Footer from '../components/footer/Footer';
import InfoCard from '../components/card/InfoCard';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class GlobalMap extends Component{
  state = {
    chart_data: [],
    labels: [],
    data: [],
    id: [],
    width: 1050,
    height: 450,
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

 // Fetches the data for the barchart.
 fetchDataForBar(){ 

  this.setState({
    chart_data:[],
    
  })
   // Fetch 7 day history for all countries
  fetch('https://disease.sh/v3/covid-19/historical/all?lastdays=7')
  .then(response => response.json())
  .then(data => {

    this.setState(
        {
           chart_data: data.cases
        }
    )
  })
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
     .then(data => {
         this.setState(
             {
                 covid_world : data
             }
         )
    })
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
    const {countries, chart_data, labels, data, id, isLoaded} = this.state;
    
    return(
      <Container fluid className='main' style={styles.container} >
        <Header title={this.state.title} option={this.state.option} to={this.state.to}  />

        <h1 style={styles.h1} >Cases from the Last 7 Days</h1>

        <Row className='mainSection' style={styles.mainSection} >
            <Col xs={{order: 'last'}}  md={{order: 'last'}} lg={{order: 'last'}} xl={{order: 'first'}} className='listSection' style={styles.list} >

                <h2 style={styles.h2} >Cases by Country</h2>
            
                <section style={styles.listSection}>
                
                  {
                    !isLoaded && countries.length > 0 ? countries.map((countries, i) => {
                    const {country, countryInfo,  cases, population, updated, todayCases, todayDeaths, todayRecovered, active} = countries;
                    return <CountryNav  key={i} cases={cases} country={country.toUpperCase()} countryInfo={countryInfo}
                    population={population} updated={updated} todayCases={todayCases}  todayDeaths={todayDeaths} todayRecovered={todayRecovered}
                    active={active} />  
                    }) : null
                  } 

                </section>
               
            </Col>
            <Col xs={12}  md={12} xl={8} >
            <section className='chartSection' style={styles.chartSection} >

                  {
                    Object.keys(chart_data).forEach((key, i) =>{

                      labels.push(key)
                      if (labels.length > 7)
                       labels.shift();
                      data.push(chart_data[key])

                      id.push(i)
                      
                    
                    })
                    
                  }

                <BarChart key={id} labels={labels} data={data} width={this.state.width} height={this.state.height} />
            
           

              <section className='infoSection' style={styles.infoSection}> 
                <InfoCard world={this.state.covid_world} />
              </section>

            </section>
            </Col>
        </Row>
        
        
        
                
        <Footer />
      </Container>

        
    );
  }

}
export default GlobalMap;


const styles ={
  
  container: {
    backgroundColor: '#000',

  },
 
  list: {
    border: '2px solid #212121',
  },
  listSection: {
    overflow: 'scroll',
    height: '48rem',
    alignContent: 'center',
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
    marginTop: '2rem',
    fontFamily: 'Roboto, san-serif',
    textAlign: 'center'
  },
  
  chartSection: {
    position: 'relative',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: '100%',
    marginTop: '1rem'
  },
  
  infoSection: {
    position: 'relative',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: '100%'
  }
  
 
  
}