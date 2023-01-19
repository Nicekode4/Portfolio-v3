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
          <a href="http://"><img src={require("../../Images/github.png")} alt="" /></a>
          <a href='title'><img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="" /></a>
          <a href="http://"><img src="https://cdn-icons-png.flaticon.com/512/124/124010.png" alt="" /></a>
        </div>
    </footer>
  )
}

export default Footer