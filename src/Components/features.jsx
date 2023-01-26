import React from "react";
import award from '../assets/award.png'
import hphones from '../assets/headphones.png'
import zashita from '../assets/Vector (3).png'
import Indofea from './indoFea'
function Featurues() {
    return (
    <section id="features">
      <div className="container">
        <h3>Feature</h3>
        <h2>The benefit of using our platform</h2>
        <div className="flex">
          <Indofea src={award} name="Professional & Fast" title="Search and hire the most talented freelancers to match your needs. No matter what you need done, we've got the perfect freelancer for you."/>
          <Indofea src={hphones} name="24/7 support" title="You have any concerns or questions? Don’t worry, we have our support team to help you at anytime and anywhere."/>
          <Indofea src={zashita} name="Safe & Secure" title="We know that safety is the most important thing for our customer, so all of our payments are processed instantly and securely."/>
        </div>
      </div>
    </section>
    )
}
export default Featurues