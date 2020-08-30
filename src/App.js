import React from 'react';
import './App.css';
import { HelloContextProvider } from './context/HelloContext';
import { Hello } from './components/Hello';

function App() {
  return (
    <div className="App">
      <HelloContextProvider>
        <Hello />
      </HelloContextProvider>
    </div>
  );
}

export default App;
