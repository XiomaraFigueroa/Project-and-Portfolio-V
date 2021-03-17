import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup'

const CountryNav = props => {
    return(

        //============ NEED TO FIGURE OUT HOW TO let the user click one

        
        <ListGroup.Item key={props.id} style={styles.list}>
            <div><strong style={styles.strongText}>{props.deaths}</strong> {props.country}</div> 
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