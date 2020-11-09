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
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <MainMenu />

      <div class="container">
        <Router>
          <Switch>
            <Route path="/hotels">
              <Hotels />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/">
              <HomePage />
            </Route>
          </Switch>
        </Router>
      </div>

      <Footer />
    </div>
  );
}

export default App;
