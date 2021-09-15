import { Route, Switch } from "react-router";
import "./App.css";
import Card from "./components/Card";
import Form from "./components/Form";
import { useState } from "react";

function App() {
  const [member, setMember] = useState();

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Form setMember={setMember} />
        </Route>
        <Route path="/card">
          <Card member={member} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
