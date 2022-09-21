import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
      <Navbar title="textutils" abouttext="about us" />
      <div className="container">
        <TextForm heading="Enter the heading" />
        {/* <About /> */}
      </div>
    </>
  );
}

export default App;
