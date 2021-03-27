import React from 'react';
import Card from 'react-bootstrap/Card'

const InfoCard = props => {
    return(
        <>
        <Card style={styles.card}  key={props.id} >
            <Card.Body >
                <Card.Title style={styles.cardTitle}>{props.world.todayCases}</Card.Title>
                <Card.Text>Today Cases</Card.Text> 
            </Card.Body>
        </Card>
        <Card style={styles.card}  key={props.id} >
            <Card.Body >
                <Card.Title style={styles.cardTitle}>{props.world.deaths}</Card.Title>
                <Card.Text>Today Deaths</Card.Text> 
            </Card.Body>
        </Card>
        <Card style={styles.card}  key={props.id} >
            <Card.Body >
                <Card.Title style={styles.cardTitle}>{props.world.recovered}</Card.Title>
                <Card.Text>Today Recovered</Card.Text> 
            </Card.Body>
        </Card>
        <Card style={styles.card}  key={props.id} >
            <Card.Body >
                <Card.Title style={styles.cardTitle}>{props.world.tests}</Card.Title>
                <Card.Text>Tests</Card.Text> 
            </Card.Body>
        </Card>
        <Card style={styles.card}  key={props.id} >
            <Card.Body >
                <Card.Title style={styles.cardTitle}>{props.world.active}</Card.Title>
                <Card.Text>Active</Card.Text> 
            </Card.Body>
            </Card>
        <Card style={styles.card}  key={props.id} >
            <Card.Body >
                <Card.Title style={styles.cardTitle}>{props.world.critical}</Card.Title>
                <Card.Text>Critical</Card.Text> 
            </Card.Body>
        </Card>
        </>
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
        fontFamily: 'Open Sans, san-serif',
        margin: '1rem'
    },
    cardTitle:{
        color: '#FEA82F',
        fontSize: '2.5rem',
        fontFamily: 'Roboto, san-serif'
    }
    
}