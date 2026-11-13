import React, { Component } from 'react'
import {Link} from "react-router-dom";

export class Navbar extends Component {
  render() {
    return (
      <nav className="navbar md:navbar-dark bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">NewsJet</Link>
          <button className="btn-icon navbar-toggler" type="button" data-bs-toggle="drawer" data-bs-target="#navbarDrawer" aria-controls="navbarDrawer" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" aria-hidden="true"></span>
          </button>
          <dialog className="drawer drawer-end" tabIndex="-1" id="navbarDrawer" aria-labelledby="navbarDrawerLabel">
            <div className="drawer-header">
              <h5 className="drawer-title" id="navbarDrawerLabel">Menu</h5>
              <button type="button" className="btn-close" data-bs-dismiss="drawer" aria-label="Close"></button>
            </div>
            <div className="drawer-body mb-2 md:mb-0">
              <ul className="nav navbar-nav me-auto">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item"><Link className="nav-link" to="/">Link</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/business">business</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/entertainment">entertainment</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/general">general</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/health">health</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/science">science</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/sports">sports</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/technology">technology</Link></li>
                <li className="nav-item">
                  <button className="nav-link" type="button" data-bs-toggle="menu" aria-expanded="false">
                    Menu
                  </button>
                  <div className="menu">
                    <Link className="menu-item" to="/">Action</Link>
                    <a className="menu-item" to="/">Another action</a>
                    <hr className="menu-divider"/>
                      <a className="menu-divider" to="/">Something else here</a>
                  </div>
                </li>
                <li className="nav-item">
                  <a className="nav-link disabled" aria-disabled="true" to="/">Disabled</a>
                </li>
              </ul>
             
            </div>
          </dialog>
        </div>
      </nav>

    )
  }
}

export default Navbar
