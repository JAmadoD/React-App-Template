import React from 'react';
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
import Downloads from '../../Pages/Downloads';
import Services from '../../Pages/Services';

const Nav = (props) => {

    return (
        <Router>
            <div className='navBar'>
                <div id='element1'>
                    <Link to='/'>Home</Link>

                </div>
                <div id='element2'>
                    <Link to='/About_us'>About Us</Link>

                </div>
                <div id='element3'>
                    <Link to='/Services'>Services</Link>


                </div>
                <div id='element4'>
                    <Link to='/Downloads'>Downloads</Link>

                </div>
                <div id='element5'>
                    <Link to='/Contact_us'>Contact Us</Link>

                </div>
 
                <Switch>
                    <Route path='/Contact_us' component={ContactUs}/>
                    <Route path='/About_us' component={AboutUs}/>
                    <Route path='/Downloads' component={Downloads}/>
                    <Route path='/Services' component={Services}/>
                    <Route path='/' exact component={Home}/>
                </Switch>
            </div>
            </Router>
        
    )
}

export default Nav;