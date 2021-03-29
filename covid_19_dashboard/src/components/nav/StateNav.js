import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup'

const StateNav = props => {

    function alertClicked() {
        alert('State: '+ [props.state] + '\n\n' +
        'Population: ' + [props.population] + '\n' + 
        'Updated: ' + [props.updated] + '\n' + 
        'Today Cases: ' + [props.todayCases] + '\n' +
        'Today Deaths: ' + [props.todayDeaths] + '\n' +
        'Recovered: ' + [props.recovered] + '\n' +
        'Active : ' + [props.active] 
        );
        
    }

    return(

        <ListGroup.Item action onClick={alertClicked} key={props.id} style={styles.list}>
            <div><strong style={styles.strongText}>{props.cases}</strong> {props.state}</div> 
        </ListGroup.Item>
       
     
        

    )
}
export default StateNav;

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
        fontFamily: 'Roboto, san-serif',
    },
    strongText: {
        color: 'red',
        marginLeft: '1rem',
        marginRight: '1rem'
    }
}