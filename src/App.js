import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import MainMenu from './components/MainMenu';
import HomePage from './pages/HomePage';
import Hotels from './pages/Hotels';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import Login from './pages/Admin/Login';
import Dashboard from './pages/Admin/Dashboard';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import HotelDetails from './pages/HotelDetails';
import AdminSideBar from './components/AdminSideBar';
import Enquiries from './pages/Admin/Enquiries';
import NewMessages from './pages/Admin/NewMessages';
import CreateEstablishment from './pages/Admin/CreateEstablishment';

function App() {
  return (
    <div className="app">

      <Router>
        <Switch>
          <Route path="/hotels/:id">
            <MainMenu displaySearchBar={true} />
            <div className="container">
              <HotelDetails />
            </div>
            <Footer />
          </Route>

          <Route path="/hotels">
            <MainMenu displaySearchBar={true} />
            <div className="container">
              <Hotels />
            </div>
            <Footer />
          </Route>

          <Route path="/contact">
            <MainMenu displaySearchBar={true} />
            <div className="container">
              <Contact />
            </div>
            <Footer />
          </Route>

          <Route path="/admin/login">
            <div className="container">
              <Login />
            </div>
            <Footer />
          </Route>

          <Route path="/admin/dashboard">
            <AdminSideBar />
            <div className="admin-container">
              <div className="container">
                <Dashboard />
              </div>
            </div>
          </Route>

          <Route path="/admin/enquiries">
            <AdminSideBar />
            <div className="admin-container">
              <div className="container">
                <Enquiries />
              </div>
            </div>
          </Route>

          <Route path="/admin/new-messages">
            <AdminSideBar />
            <div className="admin-container">
              <div className="container">
                <NewMessages />
              </div>
            </div>
          </Route>

          <Route path="/admin/create-establishment">
            <AdminSideBar />
            <div className="admin-container">
              <div className="container">
                <CreateEstablishment />
              </div>
            </div>
          </Route>

          <Route path="/">
            <MainMenu displaySearchBar={true} />
            <HomePage />
            <Footer />
          </Route>
        </Switch>
      </Router>

      
    </div >
  );
}

export default App;
