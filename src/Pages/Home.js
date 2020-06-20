import React, { Component } from 'react';
import '../Components/App/App.css';
import Header from '../Components/Header/Header';
import Nav from '../Components/Nav/Nav';

function App() {

    return(
        <div className='App'>
            <header className='app-header'><Header /></header>
                <nav className='app-nav'>
                <Nav />     
                </nav>
                    <main className='app-main'>
                        <div>
                            <h1>This is the home screen</h1>

                            <p>Content goes here</p>
                        </div>
                    </main>
            <footer className='app-footer'>This is the Footer</footer>
        </div>
         );
        
}

export default App;