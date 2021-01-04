import React, { Component } from 'react'
import { Link } from "react-router-dom";
import fetch from 'isomorphic-fetch'
import "./navbar.css";

class Navbar extends Component {
  constructor(props) {
    super(props)
    let theme = props.userSettings.theme;
    this.state = {
      allowedRoutes: props.allowedRoutes,
      theme: theme,
    };
    document.documentElement.setAttribute("data-theme", theme);
    this.activateLasers = this.activateLasers.bind(this);
    this.renderMenuPages = this.renderMenuPages.bind(this);
  }

  renderMenuPages(pages){
    var menuPages = Object.entries(pages).map(([category, subpages]) => {
        return(
          <div key={category} className="nav-menu dropdown">
            <button key={category} className="nav-item">{category}</button>
            <div className="dropdown-content">
            {Object.entries(subpages).map(([i, page]) => {
              return (
                <Link key={i} to={page.endpoint}>{page.name}</Link>
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
    this.setState({theme : theme})
    document.documentElement.setAttribute("data-theme", theme);
  }

  render() {
    return (
      <div id="nav-bar">
        <div id="nav-home" className="banana">
                <div className="nav-item">
                    <Link to="/" rel="home" id="nav-home-link">Home</Link>
                    <div>Get. It. Done.</div>
                </div>
        </div>
        <div id="nav-spacer"></div>
        {this.renderMenuPages(this.state.allowedRoutes)}
        <div className="nav-menu dropdown">
            <button className="nav-item">Site</button>
            <div className="dropdown-content">
                <div className="onoffswitch">
                  <input type="checkbox" name="onoffswitch" className="onoffswitch-checkbox" id="theme-switch" checked={this.state.theme === "dark" ? true : false} onChange={this.activateLasers}/>
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
