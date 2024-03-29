import React from 'react'
import { NavLink } from "react-router-dom";
function Footer() {
  return (
    <footer>
        <article>
            <h2>Projekter fra 2023</h2>
            <NavLink to="/projekter"><h3>Se dem her</h3> </NavLink>
        </article>
        <article>
            <h4>Websites: <span>20 +</span></h4>
            <h4>Web exstentions: <span>1</span></h4>
            <h4>API'er: <span>5</span></h4>
        </article>
        <div>
        <a href="mailto:philip@kode4.dk">📧</a>
        <a href="tel:+4522966016">☎️</a>
          <a href="https://github.com/Nicekode4" target="_blank"><img src={require("../../Images/github.png")} alt="Github" /></a>
          <a href='https://dk.linkedin.com/in/philip-thomsen-6b56b8188'><img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" /></a>
        </div>
    </footer>
  )
}

export default Footer