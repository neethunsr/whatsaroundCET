import React,{useState} from 'react';
import './App.css';
import SideMenu from './SideMenu';
import Home from './Home';
import Food from './Food';
import Travel from './Travel';
import Books from './Books';
import Blog from './Blog';
import Form from './Form';
import Login from "./login_component";
import SignUp from "./signup_component";
import {BrowserRouter as Router,Switch,Route, Link} from "react-router-dom";

function App() {
  const [inactive, setInactive] = useState(false);

  return (
    <div className="App">
      <Router>
        <SideMenu onCollapse={(inactive)=> {
          console.log(inactive);
          setInactive(inactive);
        }} />
        <div className={`box ${inactive ? "inactive" : ""}`}>
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
            <Route path={'/form'}>
              <Form />
            </Route>
        </Switch>
        </div>

        
      </Router>
    
    </div>
  );
}

// function App() {
//   return (<Router>
//     <div className="App">
//       <div className="auth-wrapper">
//         <div className="auth-inner">
//           <Switch>
//             <Route exact path='/' component={Login} />
//             <Route path="/sign-in" component={Login} />
//             <Route path="/sign-up" component={SignUp} />
//           </Switch>
//         </div>
//       </div>
//     </div></Router>
//   );
// }

export default App;
