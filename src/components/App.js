import React,{useState} from 'react';
import './App.css';
import SideMenu from './SideMenu';
import Home from './Home';
import Food from './Food';
import Travel from './Travel';
import Books from './Books';
import Blog from './Blog';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";

function App() {
  const [inactive, setInactive] = useState(false);

  return (
    <div className="App">
      <Router>
        <SideMenu onCollapse={(inactive)=> {
          console.log(inactive);
          setInactive(inactive);
        }} />
        <div className={`container ${inactive ? "inactive" : ""}`}>
        <Switch>
            <Route exact path={'/'}>
              <Home />
            </Route>
            <Route path={'/travel'}>
              <Travel />
            </Route>
            <Route path={'/blog'}>
              <Blog />
            </Route>
            <Route path={'/books'}>
              <Books />
            </Route>
            <Route path={'/food'}>
              <Food />
            </Route>
        </Switch>
        </div>

        
      </Router>
    
    </div>
  );
}

export default App;
