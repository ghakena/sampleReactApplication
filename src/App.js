import React from 'react';
import Home from './Home';
import About from './About';
import Services from './Services';
import Contact from './Contact';

function App() {
    return(
        <div>
            <h1>This is the Header Section of the App.</h1>
            <Home />
            <Services />
            <About />
            <Contact />
        </div>
    )
}

export default App;