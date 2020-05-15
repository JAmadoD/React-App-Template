import React, { Component } from 'react';
import Aux from '../hoc/Aux';
import './App.css';

class App extends Component {
render(){
    return(
    <Aux>
        <div className='App'>
        <header className='app-header'>This is the header</header>
            <nav className='app-nav'>This is the nav bar</nav>
                <main className='app-main'>
                    <div>
                        <h1>React Template</h1>
                    </div>
                    
                </main>
        <footer className='app-footer'>This is the Footer</footer>
        </div>
    </Aux>
         );
        }
}

export default App;