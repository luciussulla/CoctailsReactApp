import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
// import pages 
import Home from './pages/Home'
import About from './pages/About'
import SingleCoctail from './pages/SingleCoctail'
import Error from './pages/Error'
// import Components
import Navbar from './components/Navbar'
// import SearchBox from './components/SearchBox'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/coctails/:id">
            <SingleCoctail/>
          </Route>
          <Route path="*">
            <Error/>
          </Route>
        </Switch>
      </Router>  
    </div>
  );
}

export default App;
