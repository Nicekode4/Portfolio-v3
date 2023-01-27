import React from 'react'
import Footer from '../../Components/Footer/Footer'
import "./Projects.scss"
import logo from '../../Images/img_nature_wide.jpg';

function Projects() {
  return (
    <>
    <section className='projectSection'>
    <div className='container'>
  <img src={logo} alt="Nature" />
  <div className='text-block'>
    <h4>Nature</h4>
    <p>What a beautiful sunrise</p>
  </div>
</div>

<a href='https://google.dk' target="_blank"> <div className='container'>
  <img src={logo} alt="Nature" />
  <div className='text-block'>
    <h4>Nature</h4>
    <p>What a beautiful sunrise</p>
  </div>
</div></a>

<div className='container'>
  <img src={logo} alt="Nature" />
  <div className='text-block'>
    <h4>Nature</h4>
    <p>What a beautiful sunrise</p>
  </div>
</div>

<div className='container'>
  <img src={logo} alt="Nature" />
  <div className='text-block'>
    <h4>Nature</h4>
    <p>What a beautiful sunrise</p>
  </div>
</div>
    </section>



    <Footer />
    </>
  )
}

export default Projects