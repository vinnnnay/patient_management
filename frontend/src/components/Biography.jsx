import React from "react";

const Biography = ({imageUrl}) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <p>Biography</p>
          <h3>Who We Are</h3>
         <p>
            Medicare is a modern, patient-centric healthcare platform created to bridge the gap between patients and quality medical care through technology. Our platform is designed to simplify the healthcare experience by allowing users to book doctor appointments online, eliminating long waiting queues and saving valuable time.

At Medicare, we believe that access to healthcare should be easy, fast, and reliable. By connecting patients with experienced and qualified healthcare professionals, we ensure that every individual receives personalized care tailored to their unique medical needs. Our intuitive digital system enables patients to choose doctors, select appointment slots, and manage their healthcare journey with confidence and convenience.

Built using advanced web technologies, Medicare focuses on delivering a secure, efficient, and user-friendly experience. We prioritize patient comfort, data safety, and seamless interaction, making healthcare management stress-free for both patients and medical professionals.

Our mission is to enhance healthcare accessibility while maintaining the highest standards of trust, compassion, and medical excellence. At Medicare, we are committed to shaping the future of healthcare by combining medical expertise with smart digital solutions—ensuring better health outcomes for everyone.
         </p>
        </div>
      </div>
    </>
  );
};

export default Biography;