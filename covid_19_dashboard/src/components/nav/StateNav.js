import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup'

const StateNav = props => {

    function alertClicked() {
        alert('You clicked '+ [props.state]);
        // add additional info from the api.
        
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
        width: '100%'
        
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