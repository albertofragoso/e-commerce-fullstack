import React from 'react'
import { Link } from 'react-router-dom'

import './styles/Navbar.css'
import logo from '../images/basket.svg'

const Navbar = () => {
  return(
    <div className="Navbar">
      <div className="container-fluid">
        <Link to="/" className="Navbar__brand">
          <img src={logo} alt="E coomerce logo" className="Navbar__brand-logo"/>
          <span className="font-weight-light">E</span>
          <span className="font-weight-bold">Commerce</span>
        </Link>
      </div>
    </div>
  )
}

export default Navbar