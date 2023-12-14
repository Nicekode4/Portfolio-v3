import React from 'react'
import { NavLink } from 'react-router-dom'
import Footer from '../Footer/Footer'

function Content() {
  return (
    <section>
        <h1>Hejsa! Jeg hedder Philip</h1>
        <h5>Selvudlært webudwikler med papir og <span>omkring 7 års</span> erfaring</h5>

        <div className='buttons'>
            <NavLink to="/projekter">Projekter <span>⭷</span></NavLink>        
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