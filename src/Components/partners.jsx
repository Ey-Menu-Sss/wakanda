import React from "react";
import airbnb from '../assets/airbnb.png'
import google from '../assets/google.png'
import slack from '../assets/slack.png'
import netflix from '../assets/netflix.png'
import amazon from '../assets/Amazon Logo.png'
function Partners() {
    return (
        <section id="partners">
        <div className="container">
          <div className="flex">
            <img src={airbnb} alt="airbnb" />
            <img src={google} alt="google" />
            <img src={slack} alt="slack" />
            <img src={netflix} alt="netflix" />
            <img src={amazon} alt="amazon" />
          </div>
        </div>
      </section>
    )
}

export default Partners