import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
// import TextForm from './components/TextForm';
import { About } from './components/About';
import { useState } from 'react';

function App() {
  const [darkMode, setdarkMode] = useState(false)
  return (
    <>
     <Navbar title="ComingSlow"/>
     <div className='container'>
     {/* <TextForm heading='Enter the text'/> */}
     <About/>
     </div>
    
    </>
  );
}

export default App;
