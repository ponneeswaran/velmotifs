import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Footer,About,CollapsibleNavbar,Gallery, Home, SplashPage } from './components';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from 'react';


const App = () => {

  // useEffect(()=>{
  //   const element = document.getElementById("1");
  //   element.classList.add('active');
  // },[]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<SplashPage />} />
        <Route path="/home" element={<ReactApp />} />
      </Routes>
    </Router>
  );
}

const ReactApp = () => {
  useEffect(()=>{
    const element = document.getElementById("1");
    element.classList.add('active');
  },[]);

  return (
    <div className="App">
      <CollapsibleNavbar />
      <Home />
      <Gallery/>
      <About />
      <Footer />
    </div>
  );
};

export default App;
