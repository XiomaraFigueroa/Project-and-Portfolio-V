import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup'




const CountryNav = props => {

    function alertClicked() {
        alert('Country: '+ [props.country] + '\n\n' +
        'Population: ' + [props.population] + '\n' + 
        'Updated: ' + [props.updated] + '\n' + 
        'Today Cases: ' + [props.todayCases] + '\n' +
        'Today Deaths: ' + [props.todayDeaths] + '\n' +
        'Today Recovered: ' + [props.todayRecovered] + '\n' +
        'Active : ' + [props.active] 
        );
        
    }
      
    return(

        
        <ListGroup.Item action onClick={alertClicked} key={props.id} style={styles.list}>
            <div><strong style={styles.strongText}>{props.cases}</strong> {props.country}</div> 
            <img src={props.countryInfo} alt={'Country Flag'} style={styles.img} />
        </ListGroup.Item>
       
     
        

    )
}
export default CountryNav;

const styles = { 
    
    list: {
        postition: 'relative',
        display: 'flex',
        justifyContent: 'space-between',
        height: '3rem',
        backgroundColor: '#212121',
        color: '#fff',
        alignItems: 'center',
        border: '1px solid #000',
        width: '100%',
        fontFamily: 'Roboto, san-serif'
        // need to figure out how to add the hover effect 
        
    },
    img: {
        width: '4rem',
        height: '2rem',
        marginRight: '1rem'
    },
    strongText: {
        color: 'red',
        marginLeft: '1rem',
        marginRight: '1rem'
    }
}