import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MainMenu from './components/MainMenu';
import HomePage from './pages/HomePage';
import Hotels from './pages/Hotels';
import Contact from './pages/Contact';
import Footer from './components/Footer';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  const isHome = window.location.pathname == "/"
  return (
    <div className="App">
      <MainMenu displaySearchBar={isHome == false} />

      <Router>
        <Switch>
          <Route path="/hotels">
            <div class="container">
              <Hotels />
            </div>
          </Route>


          <Route path="/contact">
            <div class="container">
              <Contact />
            </div>
          </Route>

          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </Router>

      <Footer />
    </div >
  );
}

export default App;
