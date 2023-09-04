// = Import : local
import Navigation from '../Navigation/Navigation'
import Home from '../Home/Home';
import About from '../About/About';
import Skills from '../Skills/Skills';
import Projects from '../Projects/Projects'

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
      <Projects />
    </div>
  );
}
// == Export
export default App;
