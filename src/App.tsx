import "./App.scss";
import HookGreetings from "./components/GreetingsHooksDemo";
import CompGreetings from "./components/GreetingsCompDemo";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";
import CallbackDemo from "./components/CallbackDemo";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/hook">
            <HookGreetings name="Mary" />
          </Route>
          <Route path="/comp">
            <CompGreetings name="Mary" />
          </Route>
          <Route path="/callback">
            <CallbackDemo />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
