import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from "./components/Sidebar"

import About from "./components/About"
import Resume from "./components/Resume"
import Projects from "./components/Projects"

function App() {
  return (
    <Router>
      <div className="App">
        <div className="container app-container">
          <div className="row app-row">
            <div className="col-lg-3">
              <Sidebar />
            </div>
            <div className="col-lg-9 app-main">
              <Navbar />
              <Switch>
                <Route exact path="/" component={About} />
                <Route path="/resume" component={Resume} />
                <Route path="/projects" component={Projects} />
                <Route>
                  <Redirect to="/" />
                </Route>
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
