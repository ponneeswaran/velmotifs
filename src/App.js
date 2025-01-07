import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header,Footer,About,CollapsibleNavbar,Gallery } from './components';


function App() {
  return (
    <div className="App">
      <Header/>
      <CollapsibleNavbar />
      <Gallery/>
      <About />
      <Footer />
    </div>
  );
}

export default App;
