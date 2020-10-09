import React from 'react';
import './App.css';
import LoginPage from './components/loginpage';

function App() {
  var background = require("../src/images/background.jpg")
  return (
    <div className="App" style={{ backgroundImage: "url(" + background + ")", backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "cover", backgroundColor: "bisque", height: "100vh" }}>
      <LoginPage />
    </div>


  );
}

export default App;
