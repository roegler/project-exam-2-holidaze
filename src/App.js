import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MainMenu from './components/MainMenu';
import SearchBar from './components/SearchBar';
import Hotels from './pages/Hotels';

function App() {
  return (
    <div className="App">
        < MainMenu />
        < Hotels />
    </div>
  );
}

export default App;
