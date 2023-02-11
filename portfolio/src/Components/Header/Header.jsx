import React from 'react'
import { NavLink } from "react-router-dom";
function Header() {
  return (
    <header>
        <img src={require("../../Images/25-08-2019-2.png")} alt="" />
        <nav>
          <li><NavLink to="/">Forside</NavLink></li>
          <li><NavLink to="/projekter">Projekter</NavLink></li>
          <li><NavLink to="/om-mig">Om mig</NavLink></li>
          {/* 
          <li><NavLink to="/ydelser">Ydelser</NavLink></li> */}
        </nav>
    </header>
  )
}

export default Header