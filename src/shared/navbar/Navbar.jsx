import React, { Component } from 'react'
import fetch from 'isomorphic-fetch'
import "./navbar.css";

class Navbar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      theme: 'dark',
      allowedRoutes: {},
      test: 'banana'
    };

    this.activateLasers = this.activateLasers.bind(this);
    this.renderMenuPages = this.renderMenuPages.bind(this);

  }

  componentDidMount(){
    let self = this;
    this.activateLasers();

    var allowedRoutesURI = "http://localhost:3000/allowedRoutes";
    fetch(allowedRoutesURI)
    .then(function(response){
      return response.json();
    })
    .then(function(data){
      self.setState({allowedRoutes: data})
    })
    .catch((error) => {
      console.warn(error)
    });
  }

  renderMenuPages(pages){
    var menuPages = Object.entries(pages).map(([category, subpages]) => {
        return(
          <div key={category} className="nav-menu dropdown">
            <button key={category} className="nav-item">{category}</button>
            <div className="dropdown-content">
            {Object.entries(subpages).map(([i, page]) => {
              return (
                <a key={page.name} href={page.endpoint}>{page.name}</a>
              )
            })}
            </div>
          </div>
        )
    });
    return menuPages;
  }

  activateLasers(){
    const theme = this.state.theme === 'light' ? 'dark' : 'light';
    this.state.theme = theme;
    document.documentElement.setAttribute("data-theme", theme);
  }

  render() {
    return (
      <div id="nav-bar">
        <div id="nav-home" className="banana">
                <div className="nav-item">
                    <a href="/" rel="home" id="nav-home-link">Home</a>
                    <div>Get. It. Done.</div>
                </div>
        </div>
        <div id="nav-spacer"></div>
        {this.renderMenuPages(this.state.allowedRoutes)}
        <div className="nav-menu dropdown">
            <button className="nav-item">TEST</button>
            <div className="dropdown-content">
                <div className="onoffswitch">
                  <input type="checkbox" name="onoffswitch" className="onoffswitch-checkbox" id="theme-switch" onClick={this.activateLasers}/>
                  <label className="onoffswitch-label" htmlFor="theme-switch">
                      <span className="onoffswitch-inner"></span>
                      <span className="onoffswitch-switch"></span>
                  </label>
                </div>
            </div>
        </div>
      </div>
    )
  }
}

export default Navbar
