// = Import : local
import Navigation from '../Navigation/Navigation'
import Home from '../Home/Home';
import About from '../About/About';
import Skills from '../Skills/Skills';

// == Import : style
import './App.scss';

// == App Component
function App() {  
  return (
    <div className="App">
      <Navigation />
      <Home />
      <About />
      <Skills />
    </div>
  );
}
// == Export
export default App;
