import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomNav from './components/nav/Nav';
import Ws from './components/ws'
import CustomHttp from './components/http'

function App() {
  return (
    <div>
      <Router>
        <div>
          <header>
            <CustomNav/>
          </header>
          <Jumbotron>
            <Switch>
              <Route path="/ws" component={Ws} />
              <Route path="/" component={CustomHttp} />
            </Switch>
          </Jumbotron>
        </div>
      </Router>
    </div>
  );
}

export default App;
