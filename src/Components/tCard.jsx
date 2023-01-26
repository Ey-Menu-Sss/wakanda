import React from "react";
import star from '../assets/Star.svg'
import avatar from '../assets/Avatar.png'

const tCard = (props) => {
  return (
    <div>
      <div class="card">
        <div class="flex">
          <img src={avatar} alt="avatar" />
          <div>
            <h5>Cara Bedford</h5>
            <img src={star} alt="star" />
            <img src={star} alt="star" />
            <img src={star} alt="star" />
            <img src={star} alt="star" />
            <img src={star} alt="star" />
          </div>
        </div>
        <p>
            {props.title}
        </p>
      </div>
    </div>
  );
};

export default tCard;
