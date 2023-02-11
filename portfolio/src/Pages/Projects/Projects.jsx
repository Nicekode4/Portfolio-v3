import React from 'react'
import Footer from '../../Components/Footer/Footer'
import "./Projects.scss"
import placeholder from '../../Images/billede-kommer-snart.png';

function Projects() {
  return (
<>
    <h2>Jobs</h2>
    <section className='projectSection'>
      
    <a target="_blank" href='https://kennelfolager.dk/'><div className='container'>
  <img className='projectImg' src={require("../../Images/Kennelfolager.png")} alt="Nature" />
  <div className='text-block'>
    <h4>Kennel folager</h4>
    <p>En hjemmeside jeg lavede for en hunde kennel i Herning</p>
  </div>
</div></a>

<a target="_blank" href='https://pressemedie.dk/'><div className='container'>
  <img className='projectImg' src={require("../../Images/Pressemedie.png")} alt="Nature" />
  <div className='text-block'>
    <h4>Pressemedie</h4>
    <p>Denne hjemmeside lavede jeg for nogle amatør fotografter</p>
  </div>
</div></a>

<div className='container'>
  <img className='projectImg' src={require("../../Images/Infoskærm.png")} alt="Nature" />
  <div className='text-block'>
    <h4>Infoskærm</h4>
    <p>Beskrivelse kommer snart</p>
  </div>
</div>

<a target="_blank" href='https://amth.dk'><div className='container'>
  <img className='projectImg' src={require("../../Images/Anne-Marie.png")} alt="Nature" />
  <div className='text-block'>
    <h4>Forfatter Anne-Marie Thomsen</h4>
    <p>En hjemmeside for forfatteren Anne-Marie Thomsen</p>
  </div>
</div></a>

    </section>

    <h2>Fritid</h2>
    <section className='projectSection'>
      
    <a target="_blank" href='https://fastidious-cupcake-813ba1.netlify.app/'><div className='container'>
  <img className='projectImg' src={require("../../Images/Dogvendespil.png")} alt="Nature" />
  <div className='text-block'>
    <h4>Hunde vendespil</h4>
    <p>Et hunde vende spil</p>
  </div>
</div></a>

<a target="_blank" href='https://mediazone.netlify.app/'><div className='container'>
  <img className='projectImg' src={require("../../Images/Mediazone.png")} alt="Nature" />
  <div className='text-block'>
    <h4>Mediazone</h4>
    <p>En web app til medie afdelingen på Tech College</p>
  </div>
</div></a>

<a target="_blank" href='https://meek-profiterole-12c287.netlify.app/'><div className='container'>
  <img className='projectImg' src={require("../../Images/WindmillDashboard.png")} alt="Nature" />
  <div className='text-block'>
    <h4>Vindmølle oversigt</h4>
    <p>En vindmølle oversigts side</p>
  </div>
</div></a>

<a target="_blank" href='https://luminous-palmier-7e16e8.netlify.app/'><div className='container'>
  <img className='projectImg' src={require("../../Images/Moviesite.png")} alt="Nature" />
  <div className='text-block'>
    <h4>Movie City</h4>
    <p>En film og serie oversigt</p>
  </div>
</div></a>

<a target="_blank" href='https://blissful-yalow-85225e.netlify.app/'><div className='container'>
  <img className='projectImg' src={require("../../Images/Fredag.png")} alt="Nature" />
  <div className='text-block'>
    <h4>Er det fredag?</h4>
    <p>En simpel side der fortæller dig om det er fredag</p>
  </div>
</div></a>

<a target="_blank" href='https://teal-cassata-a545d9.netlify.app/'><div className='container'>
  <img className='projectImg' src={require("../../Images/Calculator.png")} alt="Nature" />
  <div className='text-block'>
    <h4>Lommeregneren</h4>
    <p>En simpel lommeregner</p>
  </div>
</div></a>

<a target="_blank" href='https://kode4.dk/mosstock/'><div className='container'>
  <img className='projectImg' src={require("../../Images/Bandstock.png")} alt="Nature" />
  <div className='text-block'>
    <h4>Bandstock</h4>
    <p>Et online program for amatør festivallen "Mosstock"</p>
  </div>
</div></a>

<a target="_blank" href='https://kode4.dk/projects/dograting/'><div className='container'>
  <img className='projectImg' src={require("../../Images/Dograting.png")} alt="Nature" />
  <div className='text-block'>
    <h4>Hunde vurdering</h4>
    <p>Hvilken hund er den sødeste?</p>
  </div>
</div></a>

<a target="_blank" href='https://sparkling-sprinkles-c0143b.netlify.app/'><div className='container'>
  <img className='projectImg' src={require("../../Images/Kigop.png")} alt="Nature" />
  <div className='text-block'>
    <h4>Kig op</h4>
    <p>Viser tiden indtil en himmelsk begivenhed i den nærmeste fremtid. Når tiden udløber skal du blot "kigge op"</p>
  </div>
</div></a>

<a target="_blank" href='https://kode4.dk/projects/slots/'><div className='container'>
  <img className='projectImg' src={require("../../Images/Slots.png")} alt="Nature" />
  <div className='text-block'>
    <h4>Den enearmet tyveknægt</h4>
    <p>En enarmet tyveknægt med emojis</p>
  </div>
</div></a>

    </section>

    <h2>Work in progress</h2>
    <section className='projectSection'>
      
    <a target="_blank" href='https://kode4.dk/projects/pricegessr/'><div className='container'>
  <img className='projectImg' src={require("../../Images/Pricegessr.png")} alt="Nature" />
  <div className='text-block'>
    <h4>Pricegessr</h4>
    <p>Gæt om prisen på varen er over eller under</p>
    <label htmlFor="Pro" >20%</label>
    <progress max={100} value={20} name="pro" />
  </div>
</div></a>

<a target="_blank" href='https://kode4.dk/projects/banko/'><div className='container'>
  <img className='projectImg' src={require("../../Images/Banko.png")} alt="Nature" />
  <div className='text-block'>
    <h4>Banko</h4>
    <p>Et spil banko</p>
    <label htmlFor="Pro" >80%</label>
    <progress max={100} value={80} name="pro" />
  </div>
</div></a>

<a target="_blank" href='https://incredible-speculoos-6a37d1.netlify.app/'><div className='container'>
  <img className='projectImg' src={require("../../Images/Deal-or-no-deal.png")} alt="Nature" />
  <div className='text-block'>
    <h4>Deal or no deal</h4>
    <p>Vælg den rigtige kuffert of vind 1 mil</p>
    <label htmlFor="Pro" >40%</label>
    <progress max={100} value={40} name="pro" />
  </div>
</div></a>

<a target="_blank" href='https://kode4.dk/projects/snake/'><div className='container'>
  <img className='projectImg' src={require("../../Images/Snake.png")} alt="Nature" />
  <div className='text-block'>
    <h4>Snake</h4>
    <p>Et spil snake</p>
    <label htmlFor="Pro" >90%</label>
    <progress max={100} value={90} name="pro" />
  </div>
</div></a>

<a target="_blank" href='https://papaya-stardust-ff4b05.netlify.app/'><div className='container'>
  <img className='projectImg' src={require("../../Images/TheCigaretteDuet.png")} alt="Nature" />
  <div className='text-block'>
    <h4>The Cigarette Duet</h4>
    <p>For hvert gode agument for rygning, giver siden et imod rygning</p>
    <label htmlFor="Pro" >50%</label>
    <progress max={100} value={50} name="pro" />
  </div>
</div></a>

    </section>



    <Footer />
    </>
  )
}

export default Projects