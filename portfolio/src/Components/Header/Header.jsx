import React from 'react'

function Header() {
  return (
    <header>
        <img src={require("../../Images/25-08-2019-2.png")} alt="" />
        <nav>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
        </nav>
        <button type='button'>Lets chat</button>
    </header>
  )
}

export default Header