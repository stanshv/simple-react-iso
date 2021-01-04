import React, { Component } from 'react';
import { Route, Link, Redirect, Switch } from 'react-router-dom';
import { getUserSettings } from './api'
import routes from './routes';
import Navbar from './navbar/Navbar'
import NoMatch from './NoMatch';
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props)
    // console.log("App props")
    // console.log(props)

    this.state = {
      allowedRoutes: null, //This is what our data will eventually be loaded into
      userSettings: null, //This is what our data will eventually be loaded into
      data: null //This is what our data will eventually be loaded into
    };
    // let initialData;

    // if (__isBrowser__) {
    //   initialData = window.__initialData__;
    //   // delete window.__initialData__;
    // } else {
    //   // initialData = props.staticContext.initialData;
    // }
    // console.log(initialData)
    this.loadInitialData = this.loadInitialData.bind(this);

    this.loadInitialData()

  }

  static requestInitialData() {
    return fetch("http://127.0.0.1:3000/api/news")
      .then(response => response.json())
      .catch(error => console.log(error));
  }


  componentDidMount(){
    console.log("app mounted")
  }

  loadInitialData(){
    let self = this;
    var api = "http://localhost:3000/userData/stan";
    fetch(api)
    .then(function(response){
      return response.json();
    })
    .then(function(data){
      self.setState({
        allowedRoutes: data.allowedRoutes,
        userSettings: data.userSettings
      })
    })
    .catch((error) => {
      console.warn(error)
    });
  }

  render() {
    if (!this.state.userSettings) {
      return <div>Loading</div>
    }
    return (
      <div>
        <Navbar {...this.state}/>
        <div id="content">
        <Switch>
          {routes.map(({ path, exact, component: Component, ...rest }) => (
            <Route key={path} path={path} exact={exact} render={(props) => (
              <Component {...props} {...rest} />
            )} />
          ))}
          <Route render={(props) => <NoMatch {...props} /> } />
        </Switch>
        </div>
      </div> 
    )
  }
}

export default App
