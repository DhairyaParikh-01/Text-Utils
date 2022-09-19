import './App.css';
import Navbar from './components/navbar.js';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import About from './components/About';
import { useState } from 'react';
import React from 'react';

function App() {
  const [mode, setMode] = useState('light'); // Weather the dark mode is enabled or not
  // const [value, setValue] = useState('Dark Theme: OFF');
  // const [myStyle, setStyle] = useState({ color: 'black', backgroundColor: 'white'});-------------------For About 
  const [style, setStyle] = useState({ backgroundColor: 'white', color: 'black' }); //------------------For TextForm
  // const [btnStyle, setBtnStyle] = useState({ backgroundColor: '#0d6efd', color: 'white' });//---------------For TextForm
  const [alert, setAlert] = useState(null);//-------------------------------------------------------For Alert

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }




  // -----------------------------------------------Code for dark mode of TextForm----------------------------------------------------
  // const toogleMode = () => {
  //   if (mode === 'light') {
  //     setMode('dark');
  //     showAlert('Dark mode has been enebled','success');
  //     setValue('Dark Theme: ON');
  //     setStyle({
  //       backgroundColor: 'black',
  //       color: 'white'
  //     })
  //     setBtnStyle({
  //       backgroundColor: 'white',
  //       color: '#0d6efd'
  //     })
  //     document.body.style.backgroundColor = 'black';
  //     document.body.style.color = 'white';
  //   }
  //   else {
  //     setMode('light');
  //     showAlert("Light mode has been enabled","success");
  //     setValue('Dark Theme: OFF');
  //     setStyle({
  //       backgroundColor: 'white',
  //       color: 'black'
  //     })
  //     setBtnStyle({
  //       backgroundColor: '#0d6efd',
  //       color: 'white'
  //     })
  //     document.body.style.backgroundColor = 'white';
  //     document.body.style.color = 'black';
  //   }
  // }

  //  ---------------------------------------------------------Code for About Light mode-----------------------------------------------------------//
      const LightMode = () => {
        showAlert("Light Mode has been enebled", "success");
        setStyle({
          backgroundColor: 'white',
          color: 'black'
        })
        setMode('light');
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
      }

      const DarkMode = () => {
        showAlert("Dark Mode has been enebled", "success");
        setStyle({
          backgroundColor: 'black',
          color: 'white'
        })
        setMode('dark');
        document.body.style.backgroundColor = 'black';
        document.body.style.color = 'white';
        
      }

      const Blue_Dark = () => {
        showAlert("Blue-Dark Mode has been enebled", "success");
        setStyle({
          backgroundColor: '#1d2432',
          color: 'white'
        })
        setMode('dark');
        document.body.style.backgroundColor = '#1d2432';
        document.body.style.color = 'white';
      }

      const Green_Dark = () => {
        showAlert("Green-Dark Mode has been enebled", "success");
        setStyle({
          backgroundColor: '#22321d',
          color: 'white'
        })
        setMode('dark');
        document.body.style.backgroundColor = '#22321d';
        document.body.style.color = 'white';
      }


  //  ---------------------------------------------------------Code for About dark mode-----------------------------------------------------------//
  // const toogleMode = () =>{
  //   if(mode === 'light'){
  //     setMode('dark');
  //     setValue('Dark Theme: ON');
  //     setStyle({
  //       color:'white',
  //       backgroundColor: 'black'
  //     })
  //     document.body.style.backgroundColor = 'black';
  //   }
  //   else{
  //     setMode('light');
  //     setValue('Dark Theme: OFF');
  //     setStyle({
  //       color: 'black',
  //       backgroundColor: 'white'
  //     })
  //     document.body.style.backgroundColor = 'white';
  //   }
  // }


  
  return (
    <>
      <Navbar title="TextUtils" about="AboutUs" mode={mode} LightMode={LightMode} DarkMode={DarkMode} Blue_Dark={Blue_Dark} Green_Dark={Green_Dark} />
      {/* <Navbar title="TextUtils" about="AboutUs" mode={mode} LightMode={LightMode} DarkMode={DarkMode} value={value} /> */}
      <Alert alert={alert}/>
      <div className="container">
        <TextForm heading="Enter the text to analyze" style={style}  showAlert={showAlert}/>
        {/* <About myStyle={myStyle}/> */}
      </div>
    </>
  );
}

export default App;