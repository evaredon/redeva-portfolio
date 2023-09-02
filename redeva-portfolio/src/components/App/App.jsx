/* eslint-disable no-console */
/* eslint-disable no-alert */

// = Import : npm

// = Import : local
import Navigation from '../Navigation/Navigation'
import Welcome from '../Welcome/Welcome';

// == Import : style
import './App.scss';

// == App Component
function App() {
  return (
    <div className="App">
      <Navigation />
      <Welcome />
    </div>
  );
}
// == Export
export default App;
