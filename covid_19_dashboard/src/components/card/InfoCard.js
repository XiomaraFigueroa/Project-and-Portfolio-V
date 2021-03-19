import React from 'react';
import Card from 'react-bootstrap/Card'

const InfoCard = props => {
    return(
        <Card style={styles.card}  >
            <Card.Body key={props.id} >
                <Card.Title style={styles.cardTitle} >{props.cardTitle}</Card.Title>
                <Card.Text>{props.cardInfo}</Card.Text> 
            </Card.Body>
        </Card>
    )
}
export default InfoCard;

const styles ={
     card: {
        width: '20rem',
        height: '7rem',
        textAlign: 'center',
        borderRadius: '10px',
        backgroundColor: '#212121', 
        color: '#fff',
        
    },
    cardTitle:{
        color: '#FEA82F',
        fontSize: '2.5rem'
    }
    
}