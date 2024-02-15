import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCollapsed: true
    };
  }

  handleToggleCollapse = () => {
    this.setState(prevState => ({
      isCollapsed: !prevState.isCollapsed
    }));
  };

  render() {
    const { isCollapsed } = this.state;

    return (
      <div>
        <nav className="navbar navbar-expand-lg fixed-top" data-bs-theme="dark" style={{ color: "whitesmoke", backgroundColor: "black" }}>
          <div className="container-fluid">
            <Link className="navbar-brand" style={{fontFamily:"sans-serif"}} to="/">Newsbuzz</Link>
            <button className="navbar-toggler" type="button" onClick={this.handleToggleCollapse}>
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className={`collapse navbar-collapse ${isCollapsed ? '' : 'show'}`}>
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/" onClick={() => this.setState({ isCollapsed: true })}>Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/business" onClick={() => this.setState({ isCollapsed: true })}>Business</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/entertainment" onClick={() => this.setState({ isCollapsed: true })}>Entertainment</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/health" onClick={() => this.setState({ isCollapsed: true })}>Health</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/science" onClick={() => this.setState({ isCollapsed: true })}>Science</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/sports" onClick={() => this.setState({ isCollapsed: true })}>Sports</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/technology" onClick={() => this.setState({ isCollapsed: true })}>Technology</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}
