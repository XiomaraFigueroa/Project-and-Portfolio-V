import React from 'react';
import logo from '../../logo/covid19_Logo.png';
import {FaChevronCircleDown} from 'react-icons/fa'
import Dropdown from 'react-bootstrap/Dropdown'
import { Link } from 'react-router-dom';

const Header = props => {
    
    return(
        <header style={styles.header} >
            <div style={styles.div} >
                <img src={logo} alt='Covid-19 Logo' style={styles.logo} />
                <h1 style={styles.title} >COVID-19 Dashboard</h1>
                
                <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic" style={styles.toggle} >
                    <div style={styles.content} >
                        {props.title} <FaChevronCircleDown style={styles.icon} />
                    </div>
                    
                </Dropdown.Toggle>

                <Dropdown.Menu style={styles.menu} > 
                    <Dropdown.Item as={Link} to={props.to} style={styles.item}>{props.option} </Dropdown.Item> 
                    
                </Dropdown.Menu>
                </Dropdown>
    
                
            </div>
        </header>
    )
    
}
export default Header;

const styles ={
    logo: {
        width: '3rem',
        height: '3rem'
    },
    header: {
        backgroundColor: '#212121'
    },
    div: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: '0 2rem 0 2rem',
       
    },
    title: {
        color: '#fff'
    },
    toggle: {
        width: '9rem',
        backgroundColor: '#212121',
        height: '3.5rem',
        fontSize: '1.25rem',
        color: '#fea82f',
        border: 'none',
        
       
    },
    menu:{
        backgroundColor: '#212121',
        width: '9rem',
        height: '3.5rem',
    },
    item: {
       textDecoration: 'none',
       color: '#fea82f',
       fontSize: '1.25rem',
       verticalAlign: 'middle'
    },
    icon: {
        color: '#535353',
       
    },
    content: {
        display: 'flex',
        alignItems: 'center',
       justifyContent: 'space-between'
    }
}