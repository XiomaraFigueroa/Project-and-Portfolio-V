import React, {Component} from 'react';
import BarChart from '../components/barChart/BarChart';
import Header from '../components/header/Header';
import StateNav from '../components/nav/StateNav'
import Footer from '../components/footer/Footer'
import InfoCard from '../components/card/InfoCard';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


class USMap extends Component{
  state = {
    chart_data: [],
    labels: [],
    data: [],
    id: [],
    width: 1050,
    height: 450,
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
        this.fetchDataForBar();
    } else {
        console.log(`Error.Try again.`)
    }      
  }

  // Fetches the data.
 fetchDataForBar(){ 

  this.setState({
    chart_data:[],
    
  })
   // Fetch 7 day history for all states
  fetch('https://disease.sh/v3/covid-19/historical/usa?lastdays=7')
  .then(response => response.json())
  .then(data => {

    this.setState(
        {
           chart_data: data.timeline.cases
        }
    )
  })
  .catch(error => console.log('parsing failed', error))
  
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
    const {states, chart_data, labels, data, id, isLoaded} = this.state;

    return(
      <Container fluid className='main' style={styles.container} >
        <Header title={this.state.title} option={this.state.option} to={this.state.to}  />

        <h1 style={styles.h1} >Cases from the Last 7 Days</h1>

        
        <Row className='mainSection' style={styles.mainSection} >
            <Col xs={{order: 'last'}} md={{order: 'last'}} lg={{order: 'last'}} xl={{order: 'first'}} style={styles.list}  >
                <h2 style={styles.h2} >Top 50 Confirmed Cases by County</h2>
            
               
                <section style={styles.listSection}>
                  {
                      !isLoaded && states.length > 0 ? states.map((states, i) => {
                      const {state,  cases, population, updated, todayCases, todayDeaths,recovered, active } = states;
                      return <StateNav style={styles.list} key={i} cases={cases} state={state.toUpperCase()} 
                      population={population} updated={updated} todayCases={todayCases}  todayDeaths={todayDeaths} recovered={recovered}
                      active={active} />
                      }) : null
                  } 
                </section>
           </Col>
            <Col xs={12}  md={12} xl={8}>
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
export default USMap;

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