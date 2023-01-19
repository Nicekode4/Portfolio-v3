import React from 'react'

function Header() {
  return (
    <header>
        <img src={require("../../Images/25-08-2019-2.png")} alt="" />
        <nav>
          <li><a className='active' href="/">Forside</a> <span >🡸</span></li>
          <li><a href="projekter">Projekter</a></li>
          <li><a href="om-mig">Om mig</a></li>
          <li><a href="ydelser">Ydelser</a></li>
        </nav>
    </header>
  )
}

export default Header