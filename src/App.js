//import logo from './logo.svg';
import React from 'react';
import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
const [alert, setAlert] = useState(null);
const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
const showAlert=(message,type)=>{
  setAlert({
  msg:message,
    type:type
  })
  setTimeout(() => {
    setAlert(null);
  }, 1500);
}
const toggleMode=()=>{
  if(mode==='light')
  {
    setMode('dark');
    document.body.style.backgroundColor='#042743';
    showAlert("Dark Mode has been enabled","success");
  }
  else{
    setMode('light');
    document.body.style.backgroundColor='white';
    showAlert("Light Mode has been enabled","success");
  }

}
return (
  <>
  {/* <Navbar title="TextUtils" aboutText="About TextUtils"/> */}

  {/* <Router> */}
  <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode}/>
  <Alert Alert={alert}/>
  <div className="container my-3">
  {/* <Routes> */}
          {/* <Route exact path="/about" element={<About />} /> */}
          {/* <Route exact path="/" element={ */}
            <TextForm showAlert={showAlert}heading="Enter the Text to Analyze below" mode={mode}/>
            {/* }/> */}
        {/* </Routes> */}
  </div>
  {/* </Router> */}
  </>
 );
}

export default App;
