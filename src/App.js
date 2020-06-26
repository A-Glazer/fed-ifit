import React from 'react';
import "./styles.css"
import Home from "./components/Home.js"
import { Route, Switch } from 'react-router-dom'

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </div>
    );
  }
}



export default (App)