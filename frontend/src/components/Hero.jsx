import React from "react";

const Hero = ({ title, imageUrl }) => {
  return (
    <>
      <div className="hero container">
        <div className="banner">
          <h1>{title}</h1>
          <p>
           Medicare helps you book doctor appointments online with ease, eliminating long waiting queues at hospitals. Through our platform, you can quickly choose your preferred doctor, select a suitable time slot, and confirm your appointment in just a few clicks. This convenient system saves time, reduces hassle, and ensures timely access to quality healthcare. At Medicare, we combine medical expertise with digital convenience to make your healthcare journey smooth, efficient, and stress-free.
          </p>
        </div>
        <div className="banner">
          <img src={imageUrl} alt="hero" className="animated-image" />
          <span>
            <img src="/Vector.png" alt="vector" />
          </span>
        </div>
      </div>
    </>
  );
};

export default Hero;