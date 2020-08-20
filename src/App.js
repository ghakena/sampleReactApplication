import React from 'react';
import Home from './Home';
import About from './About';
import Services from './Services';
import Contact from './Contact';
import Nav from './Nav.js';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter, Route} from 'react-router-dom';

function App() {
    return(
        <div className="app-div">
            <BrowserRouter>
                <h1>This is the Header Section of the App.</h1>
                <Nav />
                <Home />
                <Services />
                <About />
                <Contact />
            </BrowserRouter>
            
        </div>
    )
}

export default App;