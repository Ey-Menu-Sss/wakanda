import React from "react";
import Buttons from "./buttons";
import showcase from '../assets/showcase.png'

function Showcase() {
    return (
        <section id="showcase">
        <div className="container">
        <div className="flex">
          <div className="portion">
            <h1>Recruit top talented freelancer for your business</h1>
            <p>
              Connect you to thoudsands of talented freelancer from any
              industry. You can have the best people in just few simple steps.
            </p>
            <Buttons/>
          </div>
          <div className="portion">
            <img src={showcase} alt="Showcase" />
          </div>
        </div>
        </div>
        </section>
    )
}

export default Showcase;







