import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import MainMenu from './components/MainMenu';
import HomePage from './pages/HomePage';
import Hotels from './pages/Hotels';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import Login from './pages/Admin/Login';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import HotelDetails from './pages/HotelDetails';

function App() {
  const isHome = window.location.pathname === "/"
  return (
    <div className="app">
      <MainMenu displaySearchBar={isHome === false} />

      <Router>
        <Switch>
        <Route path="/hotels/:id">
            <div className="container">
              <HotelDetails />
            </div>
          </Route>

          <Route path="/hotels">
            <div className="container">
              <Hotels />
            </div>
          </Route>

          <Route path="/contact">
            <div className="container">
              <Contact />
            </div>
          </Route>

          <Route path="/admin/login">
            <div className="container">
              <Login />
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
