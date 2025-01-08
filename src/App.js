import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header,Footer,About,CollapsibleNavbar,Gallery, Home } from './components';
import { useEffect } from 'react';


const App = () => {
  useEffect(()=>{
    const element = document.getElementById("1");
    element.classList.add('active');
  },[]);

  return (
    <div className="App">
      <Header/>
      <CollapsibleNavbar />
      <Home />
      <Gallery/>
      <About />
      <Footer />
    </div>
  );
}

export default App;
