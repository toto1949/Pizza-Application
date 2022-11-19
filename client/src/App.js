import logo from './logo.svg';
import './App.css';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.css'
import NavBar from "./Components/NavBar";
import HomePage from "./Screens/HomePage";

function App() {
  return (
    <div className="App">
      <NavBar/>
        <HomePage/>
    </div>
  );
}

export default App;
