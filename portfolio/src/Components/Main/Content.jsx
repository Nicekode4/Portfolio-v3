import React from 'react'
import Footer from '../Footer/Footer'

function Content() {
  return (
    <section>
        <h1>Hejsa! Jeg hedder Philip</h1>
        <h5>Selvudlært webudwikler med <span>7 års</span> erfaring</h5>

        <div className='buttons'>
            <button type='button'>Få et tilbud</button>
            <button type='button'>Projekter <span>⭷</span></button>        
        </div>
        <div className='mainGrid'>
            <div className='contact'>
                <p>Kontakt info:</p>
                <span>                
                <p><a href="mailto:philip@kode4.dk">📧</a></p>
                <p><a href="tel:+4522966016">☎️</a></p>
                </span>

            </div>
        </div>
        <Footer />
    </section>
  )
}

export default Content