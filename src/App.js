import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
// import pages 
import Home from './pages/Home'
// import About from './pages/About'
import SingleCoctail from './pages/SingleCoctail'
import Error from './pages/Error'
// import Components
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="App">
        <h2>App component</h2>
    </div>
  );
}

export default App;
