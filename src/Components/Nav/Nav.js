import React from 'react';
import Aux from '../hoc/Aux';
import './Nav.css';
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
  } from 'react-router-dom';
import Home from '../../Pages/Home';
import AboutUs from '../../Pages/AboutUs';
import ContactUs from '../../Pages/ContactUs';
import Downloads from '../../Pages/downloads';
import Services from '../../Pages/Services';

const Nav = (props) => {

    return (
        <Router>
        <Aux>
            <div className='navBar'>
                <div id='element1'>
                    <Link to='/'>Home</Link>

                </div>
                <div id='element2'>
                    <Link to='/about_us'>About Us</Link>

                </div>
                <div id='element3'>
                    <Link to='/services'>Services</Link>


                </div>
                <div id='element4'>
                    <Link to='/downloads'>Downloads</Link>

                </div>
                <div id='element5'>
                    <Link to='/contact_us'>Contact Us</Link>

                </div>

                <Switch>
                    <Route path='\' Component={Home}></Route>
                    <Route path='\contact_us' Component={ContactUs}></Route>
                    <Route path='\about_us' Component={AboutUs}></Route>
                    <Route path='\downloads' Component={Downloads}></Route>
                    <Route path='\contact_us' Component={Services}></Route>
                </Switch>
            </div>
        </Aux>
        </Router>
    )
}

export default Nav;