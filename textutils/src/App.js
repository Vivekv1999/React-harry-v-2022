import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import {
  BrowserRouter, Routes, Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');//  --->darkmode is unable or not
  const [alert, setalert] = useState('null')

  function showalert(message, typee) {
    setalert({
      msg: message,
      type: typee
    })
    setTimeout(() => {
      setalert(null)
    }, 1500);
  }

  const togglemode = () => {
    if (mode === "light") {
      setMode('dark')
      document.body.style.backgroundColor = "grey"
      showalert("dark mode has been enabled", "success")
      document.title = "Textils- Dark Mode"
      // setInterval(() => {
      //   document.title="Textils- Dark Mode"
      // }, 2000);react-router-dom 
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = "white"
      showalert("light mode has been enabled", "success")
      document.title = "Textils- Light Mode"
    }
  }

  return (
    <>

      <BrowserRouter>

        <Navbar title="textutils" abouttext="about us" modee={mode} togglemodeee={togglemode} />

        {/* <Alert alert={alert}/> */}

        <Routes>
          <Route path="/about" element={<About />} />
        </Routes>
        
          <div className="container">
            <TextForm showalerttt={showalert} heading="Enter the heading" modee={mode} />
          </div>
          

      </BrowserRouter>
        
    </>
  );
}

export default App;
