import { Switch, Route, useLocation, Routes } from "react-router-dom";
import List from "./pages/list";
import Problem1 from "./pages/Problem1";
import Problem2 from "./pages/Problem2";
import Problem3 from "./pages/Problem3";
import Problem4 from "./pages/Problem4";
import Problem5 from "./pages/Problem5";
function App() {
  const location = useLocation();
  return (
    <Switch location={location} key={location.pathname}>
      <Route path="/" exact>
        <List />
      </Route>
      <Route path="/problem1">
        <Problem1 />
      </Route>
      <Route path="/problem2">
        <Problem2 />
      </Route>
      <Route path="/problem3">
        <Problem3 />
      </Route>
      <Route path="/problem4">
        <Problem4 />
      </Route>
      <Route path="/problem5">
        <Problem5 />
      </Route>
    </Switch>
  );
}

export default App;
