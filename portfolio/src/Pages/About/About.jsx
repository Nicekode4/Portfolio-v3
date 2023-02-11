import React from 'react'
import "./About.scss"

function About() {
  return (
    <section id='aboutSection'>
      <div id='textDiv'>
      <h3>Philip Thomsen</h3>
     <p>Mit navn er Philip, kald du mig bare "PH" hvis det er nemmere at huske. Jeg har udviklet hjemmesider i omkring 5 år. Startede af lyst, bliver ved af kærlighed. For ligesom hende den søde fra parallel klassen, så er jeg også faldet totalt for webudvikling.</p>
     <p>Mine projekter bliver kun begrænset af fantasi, ikke af viden.</p>
     <div id='techStack'>
        <h3>Hvad kan jeg?</h3>
        <h4>Min tech stack includere blandt andet:</h4>
        <ul>
          <li>React</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>SCSS</li>
          <li>Javascript</li>
          <li>Wordpress</li>
          <li>SEO</li>
          <li>Google Buisness</li>
        </ul>
        </div>
      </div>
      <img id='aboutImg' src={require("../../Images/profil.jpg")} alt="" />
       
    </section>
  )
}

export default About