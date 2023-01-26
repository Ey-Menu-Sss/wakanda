import React from 'react'
import imgExplore from '../assets/explore.png'
import Buttons from './buttons'


const explore = () => {
  return (
    <div>
      <section id="explore">
      <div class="container">
        <div class="flex">
          <div class="portion">
            <h2>Explore and hire talent from our platform</h2>
            <p>
              We've got experts for every industry - all under one roof! You can
              find everything from WordPress developers to Graphic designers to
              copywriters and many more at Wakanda.
            </p>
            <Buttons/>
          </div>
          <div class="portion">
            <img src={imgExplore} alt="Explore" />
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default explore
