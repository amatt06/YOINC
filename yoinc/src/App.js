import React from 'react';
import './App.css';

function App() {
    return (
        <div className="App">
            <img alt='logo' src={require('./images/YOINC_logo.png')}/>
            <h1>YOINC</h1>
            <h2>Welcome!</h2>
            <button>
                Lets get started
            </button>
        </div>
    );
}

export default App;
