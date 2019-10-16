import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import socketIOClient from "socket.io-client";

const App = () => {
    const [response, setResponse] = useState(false);
    const [endpoint, setEndpoint] = useState("http://192.168.1.149:8000");

    useEffect(()=>{
        const socket = socketIOClient(endpoint);
        socket.on("pulse2",data=> console.log('data',data));
    },[]);

    return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
