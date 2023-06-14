import react , { useState } from 'react'
import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import Home from './Components/Home';


function App() {
  
  return (
    <>
      <div className="App">
        <Header />
        <Home/>
      </div>
    </>
  );
}

export default App;
