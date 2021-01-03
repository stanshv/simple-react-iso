import React, { Component } from 'react';
import { Route, Link, Redirect, Switch } from 'react-router-dom';
import routes from './routes';
import Navbar from './navbar/Navbar'
import NoMatch from './NoMatch';
import "./App.css";
// import styles from "./AppCSS.css"
// import "./style.css";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />

        <Switch>
          {routes.map(({ path, exact, component: Component, ...rest }) => (
            <Route key={path} path={path} exact={exact} render={(props) => (
              <Component {...props} {...rest} />
            )} />
          ))}
          <Route render={(props) => <NoMatch {...props} /> } />
        </Switch>
      </div> 
    )
  }
}

export default App
