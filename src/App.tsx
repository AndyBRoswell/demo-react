import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() { // React components are regular JavaScript functions, but their names must start with a capital letter
    return ( // If markup is multiline, wrap it in a pair of parentheses. Otherwise, any code on the lines after return will be ignored
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>Edit <code>src/App.tsx</code> and save to reload.</p>
                <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">Learn React</a>
            </header>
        </div>
    );
}

export default App; // (JS) mark the main function in a file so that you can later import it from other files
