import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  const[mode, setMode]=useState('light');//  --->darkmode is unable or not

  const togglemode=()=>{
    if(mode === "light"){
      setMode('dark')
      document.body.style.backgroundColor="grey"
    }
    else{
      setMode('light')
      document.body.style.backgroundColor="white"
    }
  }

  return (
    <>
      <Navbar title="textutils" abouttext="about us" modee={mode} togglemodeee={togglemode}/>
      <div className="container">
        <TextForm heading="Enter the heading" modee={mode}/>
        {/* <About /> */}
      </div>
    </>
  );
}

export default App;
