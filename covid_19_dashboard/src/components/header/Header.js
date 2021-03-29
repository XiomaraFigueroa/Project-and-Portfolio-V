import React from 'react';
import logo from '../../logo/covid19_Logo.png';
import {FaChevronCircleDown} from 'react-icons/fa'
import Dropdown from 'react-bootstrap/Dropdown'
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';


const Header = props => {
    
    return(
        
        <Navbar  expand="lg" style={styles.header} >  
            <Navbar.Brand style={styles.title} >
                <img src={logo} alt='Covid-19 Logo' style={styles.logo} />
                COVID-19 Dashboard
            </Navbar.Brand>
            <Dropdown>
               <Dropdown.Toggle variant="success" id="dropdown-basic" style={styles.toggle} >
                    <div style={styles.content} >
                        {props.title} <FaChevronCircleDown style={styles.icon} />
                    </div>
               </Dropdown.Toggle>

                <Dropdown.Menu style={styles.menu} > 
                    <Dropdown.Item as={Link} to={props.to} style={styles.item}>{props.option} </Dropdown.Item> 
                    
             </Dropdown.Menu></Dropdown>
      </Navbar>
      
    )
    
}
export default Header;

const styles ={
    logo: {
        width: '3rem',
        height: '3rem',
        marginRight: '1rem'
    },
    header: {
        display:'flex',
        justifyContent:'space-between',
        backgroundColor: '#212121',
       
    },
    
    title: {
        color: '#fff',
        fontFamily: 'Roboto, san-serif'
    },
    
    toggle: {
        width: '10rem',
        backgroundColor: '#212121',
        height: '3.5rem',
        fontSize: '1.25rem',
        color: '#fea82f',
        border: 'none',
        
       
    },
    menu:{
        backgroundColor: '#212121',
        width: '10rem',
        height: '3.5rem',
    },
    item: {
       textDecoration: 'none',
       color: '#fea82f',
       fontSize: '1.25rem',
       verticalAlign: 'middle',
       fontFamily: 'Roboto, san-serif',
      
    },
    icon: {
        color: '#535353',
        marginLeft: '1rem'
        
    },
    content: {
        display: 'flex',
        alignItems: 'center',
       justifyContent: 'space-between'
    }
   
}