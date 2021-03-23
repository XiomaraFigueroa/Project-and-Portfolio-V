import React from 'react';

const Footer = props =>{
    return(

    <footer style={styles.footer} key={props.id}>
        <div style={styles.div} >
            <p>Coming Soon.{props.updated}</p>
        </div>
        
    </footer>

    )
}
export default Footer;

const styles ={
    footer: {
        backgroundColor: '#212121',  
    },
    div: {
        display: 'flex',
        justifyContent: 'flex-end',
        color: '#fff',
        fontFamily: 'Open Sans, san-serif'
    }
}