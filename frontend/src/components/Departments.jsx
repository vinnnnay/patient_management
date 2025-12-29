import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Departments = () => {
  const departmentsArray = [
    { name: "Pediatrics", imageUrl: "/departments/pedia.jpg" },
    { name: "Orthopedics", imageUrl: "/departments/ortho.jpg" },
    { name: "Cardiology", imageUrl: "/departments/cardio.jpg" },
    { name: "Neurology", imageUrl: "/departments/neuro.jpg" },
    { name: "Oncology", imageUrl: "/departments/onco.jpg" },
    { name: "Radiology", imageUrl: "/departments/radio.jpg" },
    { name: "Physical Therapy", imageUrl: "/departments/therapy.jpg" },
    { name: "Dermatology", imageUrl: "/departments/derma.jpg" },
    { name: "ENT", imageUrl: "/departments/ent.jpg" },
  ];

  const responsive = {
    extraLarge: {
      breakpoint: { max: 3000, min: 1324 },
      items: 4,
    },
    large: {
      breakpoint: { max: 1324, min: 1005 },
      items: 3,
    },
    medium: {
      breakpoint: { max: 1005, min: 700 },
      items: 2,
    },
    small: {
      breakpoint: { max: 700, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-14 bg-white">
      
      {/* Heading */}
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
        Our Departments
      </h2>

      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        transitionDuration={1000}
        customTransition="transform 1000ms ease-in-out"
        keyBoardControl={true}
        removeArrowOnDeviceType={["tablet", "mobile"]}
      >
        {departmentsArray.map((depart, index) => (
          <div key={index} className="px-3">
            <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden group">
              
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={depart.imageUrl}
                  alt={depart.name}
                  className="w-full h-56 object-cover transform group-hover:scale-105 transition duration-300"
                />
              </div>

              {/* Name */}
              <div className="py-5 text-center">
                <h3 className="text-lg font-semibold text-gray-700 group-hover:text-blue-600 transition">
                  {depart.name}
                </h3>
              </div>

            </div>
          </div>
        ))}
      </Carousel>
    </section>
  );
};

export default Departments;
