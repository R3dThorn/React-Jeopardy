import React from 'react';
import './App.css';

import Navigation from "./components/navigation/Navigation"
import { Route, Switch } from 'react-router-dom';

import Welcome from "./components/welcome/Welcome"
import Clock from "./components/clock/Clock"
import Contact from "./components/contact/Contact"
import Error404 from "./components/error404/Error404"

function App() {
  return (
    <div className="App">
        <Navigation />
     <Switch>
        <Route
          exact
          path="/"
          render={(props) => <Welcome {...props} name="Thorn" />}
        // Spread operator [...] allows props to be drawn while the component is being called by the Route component
        />
        <Route
          exact
          path="/welcome/:name"
          render={(props) => <Welcome {...props} name={props.match.params.name} />}
        />
        <Route exact path="/clock" component={Clock}/>
        <Route exact path="/contact" component={Contact} />
        <Route path="*">
          <Error404 />
        </Route>
      </Switch>

    </div>
  );
}

export default App;
