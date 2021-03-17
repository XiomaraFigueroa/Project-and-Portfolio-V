import React, {Component} from 'react';
import logo from '../../logo/covid19_Logo.png';
import {FaChevronCircleDown} from 'react-icons/fa'
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'

const Header = props => {
    
    return(
        <header style={styles.header} >
            <div style={styles.div} >
                <img src={logo} alt='Covid-19 Logo' style={styles.logo} />
                <h1 style={styles.title} >COVID-19 Dashboard</h1>
                <div>

                    <DropdownButton id="dropdown-basic-button" title={props.title}>
                    <Dropdown.Item href="#/action-1">US Map</Dropdown.Item>
                    </DropdownButton>
                   



                </div>
                
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
        margin: '0 2rem 0 2rem'
    },
    title: {
        color: '#fff'
    },
    

}