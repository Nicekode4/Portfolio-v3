import React from 'react'
import Content from './Content'
import Img from './Img'

function MainComponent() {
  return (
    <section className='mainSection'>
        <div>
            <Content />
            
        </div>
        <div>
          <Img />  
        </div>
    
    </section>

  )
}

export default MainComponent