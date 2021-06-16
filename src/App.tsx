import "./App.scss";
import HookGreetings from "./components/GreetingsHooksDemo";
import CompGreetings from "./components/GreetingsCompDemo";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CallbackDemo from "./components/CallbackDemo";
import ReducerDemo from "./components/ReducerDemo";

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
          <Route path="/reducer">
            <ReducerDemo />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
