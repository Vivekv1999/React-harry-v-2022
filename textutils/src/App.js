import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import {
//   BrowserRouter, Routes, Route
// } from "react-router-dom";

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
      document.title = "Textutils- Light Mode"
    }
  }

  return (
    <>


        <Navbar title="Textutils" abouttext="about us" modee={mode} togglemodeee={togglemode} />
        <TextForm showalerttt={showalert} heading="Enter the heading" modee={mode} />

        {/* <Alert alert={alert}/> */}


        
        {/* ============> git page ma route barabar nati vhaltu ate route kathu  &&&& about valu akhu page kathu
        ==================> olaa nVBAR MA JAY ANI JAGAA Link   LAKHU TYA PN PA6U     a    ANE href LAKHI NAKHU  */}

        {/* <BrowserRouter> */}
        
        {/* <Routes>
          <Route path="/About" element={<About  />} />
        </Routes>

        <Routes>
          <Route path="/" element={<TextForm showalerttt={showalert} heading="Enter the heading" modee={mode} />}></Route>
        </Routes> */}

        {/* <div className="container">  ===========> pela rout pela avu hatu <==============
          <TextForm showalerttt={showalert} heading="Enter the heading" modee={mode} />
        </div> */}

      {/* </BrowserRouter> */}
        
    </>
  );
}

export default App;
