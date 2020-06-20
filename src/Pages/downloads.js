import React, { Component } from 'react';

import '../Components/App/App.css';
import Header from '../Components/Header/Header';
import Nav from '../Components/Nav/Nav';

//page is to be used as template for other pages

function Downloads(){

    return(
    
        <div className='App'>
        <header className='app-header'><Header /></header>
            <nav className='app-nav'><Nav /></nav>
                <main className='app-main'>
                    <div>
                        <h1>Page for Downloads</h1>
                    </div>
                </main>
        <footer className='app-footer'>This is the Footer</footer>
        </div>
    
         );
        
}

export default Downloads;