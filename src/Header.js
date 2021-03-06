import React, { Component } from 'react'
import './Header.scss'
import { NavLink } from 'react-router-dom'

export class Header extends Component {
  render() {
    return (
      <header className="main">
        <h1>Advanced JavaScript</h1>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/references">References</NavLink>
        </nav>
      </header>
    )
  }
}

export default Header
