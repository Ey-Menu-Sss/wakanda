import React from 'react'
import Asdf from '../assets/bio_1.png'

const steps = () => {
  return (
    <div>
      <section id="steps">
      <div class="container">
        <div class="flex">
          <div class="portion">
            <img src={Asdf} alt="window" />
          </div>
          <div class="portion">
            <h2>Wakanda is an easy platform to find talent</h2>
            <ol>
              <li><span class="marker">1</span>Lorem.</li>
              <li><span class="marker">2</span>Est, et!</li>
              <li><span class="marker">3</span>Eligendi, consectetur iste.</li>
              <li><span class="marker">4</span>Ipsa animi in officia?</li>
              <li>
                <span class="marker">5</span>Consequatur aspernatur odit sed
                fugit.
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default steps
