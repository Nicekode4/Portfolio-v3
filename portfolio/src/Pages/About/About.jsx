import React from 'react'
import "./About.scss"

function About() {
  return (
    <section id='aboutSection'>
      <p>1</p>
      <p>2</p>
      <p>3</p>
      <img id='aboutImg' src={require("../../Images/profil.jpg")} alt="" /> 
    </section>
  )
}

export default About