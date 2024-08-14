import React, { useState } from 'react';
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [result, setResult] = useState('');
  const [isHovered, setIsHovered] = useState(false);

  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    const number = parseInt(value, 10);

    if (isNaN(number)) {
      setResult('');
      return;
    }

    if (number < 0) {
      setResult('enter a positive value');
    } else if (number % 2 === 0) {
      setResult(`${number + 2}, ${number + 4}, ${number + 6}`);
    } else {
      setResult(`${number + 2}, ${number + 4}, ${number + 6}`);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <input
          type="number"
          value={inputValue}
          onChange={handleChange}
          placeholder="Enter a number"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className={isHovered ? 'hovered' : ''}
        />
        <p>{result}</p>
      </header>
    </div>
  );
}

export default App;
