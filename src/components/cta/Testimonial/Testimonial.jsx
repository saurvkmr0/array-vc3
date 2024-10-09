import React, { useState, useEffect } from 'react';
import './Testimonial.scss'; // Import the SCSS file

import img1 from '../../../assets/images/common/team_1.png'
import img2 from '../../../assets/images/common/team_2.png'
import img3 from '../../../assets/images/common/team_3.png'

const testimonials = [
  {
    message: "This product has completely transformed the way I manage my daily tasks. It’s user-friendly and has improved my productivity significantly.",
    name: "Jane Doe",
    designation: "Product Manager at XYZ Corp",
    image: img1,
  },
  {
    message: "An amazing experience! The team behind this product really knows how to make a difference in people's lives. Highly recommended!",
    name: "John Smith",
    designation: "Developer at ABC Inc",
    image: img2,
  },
  {
    message: "I've never seen anything like this before. It's a game-changer for our industry, and we're very happy to be using it.",
    name: "Emma Brown",
    designation: "CEO at LMN Ltd",
    image: img3,
  },
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000); // Change testimonial every 5 seconds

    return () => clearInterval(interval); // Clear interval when component unmounts
  }, []);

  const { message, name, designation, image } = testimonials[currentIndex];

  return (
    <div className="testimonial-slider">
      <p className="testimonial-message">"{message}"</p>
      <div className="testimonial-author">
        <img src={image} alt={name} className="author-image" />
        <h3 className="author-name">{name}</h3>
        <span className="author-designation">{designation}</span>
        <span>⭐⭐⭐⭐⭐</span>
      </div>
    </div>
  );
};

export default Testimonial;
