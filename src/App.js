import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header,Footer,About,CollapsibleNavbar,Gallery, Home } from './components';


function App() {
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
