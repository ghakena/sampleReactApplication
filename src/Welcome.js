import React from 'react';
import App from './App';
import Button from './Button';

function Welcome() {
    return (
        <div>
            <h2>Welcome to OLMO!</h2>
            <p>Our goals this year include the following;</p>
            <App />
            <p>Want to get on board?</p>
            <Button />
        </div>
    )
}

export default Welcome;