import React from 'react';
import './App.css';

function App() {
  const [message, setMessage] = React.useState('');
  const [health, setHealth] = React.useState('');

  React.useEffect(() => {
    fetch('/')
      .then(res => res.json())
      .then(data => setMessage(data.message));
  }, []);

  React.useEffect(() => {
    fetch('/health')
      .then(res => res.json())
      .then(data => setHealth(data.status));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to TestApp</h1>
        <p>{message}</p>
        <p>Health: {health}</p>
      </header>
    </div>
  );
}

export default App;
