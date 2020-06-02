import React, { Component } from 'react';
import Aux from '../hoc/Auxi';
import './App.css';
import Header from '../Header/Header';
import Nav from '../Nav/Nav';


class Home extends Component {
    constructor(props) {
        super(props)};


render(){
    return(
    
    <Aux>
        <div className='App'>
        <header className='app-header'><Header /></header>
            <nav className='app-nav'>
                <Nav />     
            </nav>
                <main className='app-main'>
                    <div>
                        <h1>Content goes here</h1>
                    </div>
                </main>
        <footer className='app-footer'>This is the Footer</footer>
        </div>
    </Aux>
    
         );
        }
}

export default Home;