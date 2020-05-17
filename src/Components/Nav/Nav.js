import React from 'react';
import Aux from '../hoc/Aux';
import './Nav.css';
import NavItem from './NavItem/NavItem';
import { Link } from "react-router-dom";

const Nav = (props) => {

    return (
        <Aux>
            <div className='navBar'>
                <NavItem name='Home'/>
                <NavItem name='Articles'/>
                <NavItem name='About Us'/>
                <NavItem name='Contact Us'/>
            </div>
        </Aux>
    )
}

export default Nav;