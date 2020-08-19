import React from 'react';
import Home from './Home';
import About from './About';
import Services from './Services';
import Contact from './Contact';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
    return(
        <div className="app-div">
            <h1>This is the Header Section of the App.</h1>
            <Home />
            <Services />
            <About />
            <Contact />
        </div>
    )
}

export default App;