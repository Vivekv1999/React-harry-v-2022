import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import NoteState from './Context/notes/NoteState';
import Alert from './components/Alert';
import Signup from './components/Signup';
import Login from './components/Login';


function App() {
  return (
    <>

        <NoteState >
      <BrowserRouter>
          <Navbar />
          <Alert/>
          <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
          </Routes>
          </div>
      </BrowserRouter>
        </NoteState>
    </>
  );
}

export default App;
