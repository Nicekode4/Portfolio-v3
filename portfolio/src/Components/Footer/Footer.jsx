import React from 'react'

function Footer() {
  return (
    <footer>
        <article>
            <h2>Projects in 2022</h2>
            <button>Se dem her</button>
        </article>
        <article>
            <h4>Websites: <span>75</span></h4>
            <h4>Websites: <span>75</span></h4>
            <h4>Websites: <span>75</span></h4>
        </article>
        <div>
          <a href="https://github.com/Nicekode4" target="_blank"><img src={require("../../Images/github.png")} alt="Github" /></a>
          <a href='https://dk.linkedin.com/in/philip-thomsen-6b56b8188'><img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" /></a>
        </div>
    </footer>
  )
}

export default Footer