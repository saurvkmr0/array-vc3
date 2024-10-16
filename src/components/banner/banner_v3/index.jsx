import React, { useEffect, useState } from 'react';
import '../styles.scss';
import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import { Link } from 'react-router-dom';

Banner3.propTypes = {
  data: PropTypes.array,
};

function Banner3(props) {
  // Hero text
  const changingText = ['Cybersecurity', 'Future', 'B2B SaaS', 'Ed Tech', 'AI'];
  const [currentText, setCurrentText] = useState(changingText[0]);
  const [fadeOut, setFadeOut] = useState(false);
  const [index, setIndex] = useState(0);
  const [textStyle, setTextStyle] = useState({
    opacity: 0,
    transform: 'translateY(200px)',
    transition: 'opacity 0.5s ease-in-out, transform 0.7s ease-in-out',
    color: 'var(--highlight-color)',
  });

  useEffect(() => {
    // Trigger initial animation on component mount
    setTimeout(() => {
      setTextStyle({
        opacity: 1,
        transform: 'translateY(0)',
        transition: 'opacity 0.5s ease-in-out, transform 0.7s ease-in-out',
        color: 'var(--highlight-color)',
      });
    }, 200); // Delay to ensure the animation starts after mounting

    const cycleText = () => {
      setFadeOut(true); // Start fade-out

      setTimeout(() => {
        // Change text after fading out
        setIndex((prevIndex) => (prevIndex + 1) % changingText.length);
        setCurrentText(changingText[(index + 1) % changingText.length]);
        setFadeOut(false); // Start fade-in

        // Reset the animation for the new text
        setTextStyle({
          opacity: 0,
          transform: 'translateY(200px)',
          transition: 'opacity 0.5s ease-in-out, transform 1s ease-in-out',
          color: 'var(--highlight-color)',
        });

        // Trigger fade-in and move-up animation for the new text
        setTimeout(() => {
          setTextStyle({
            opacity: 1,
            transform: 'translateY(0)',
            transition: 'opacity 0.5s ease-in-out, transform 1s ease-in-out',
            color: 'var(--highlight-color)',
          });
        }, 100);
      }, 500); // Match this time with the CSS transition duration
    };

    const interval = setInterval(cycleText, 2000); // Change text every 2 seconds
    return () => clearInterval(interval);
  }, [index]);

  const { data } = props;

  return (
    <div className="page-title st3">
      <div className="overlay"></div>
      <div className="slider-main">
        <Swiper modules={[Navigation]} spaceBetween={0} slidesPerView={1} navigation>
          {data.slice(0, 1).map((item) => (
            <SwiperSlide key={item.id}>
              <div className="slider-st3">
                <div className="container">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="box-slider">
                        <div className="content-box">
                          <h1 className="title">Empowering</h1>
                          <h1
                            className="title"
                            style={{
                              ...textStyle,
                              opacity: fadeOut ? 0 : textStyle.opacity,
                            }}
                          >
                            {currentText}
                          </h1>
                          <h1 className="title">Founders</h1>
                          <p className="sub-title">Vision Needs Liquidity</p>
                          <div className="wrap-btn">
                            <Link to="/project_list" className="tf-button style2">
                              LEARN MORE
                            </Link>
                          </div>
                          <div className="flat-box">
                            <div className="box-couter">
                              <p>Potential project</p>
                              <div className="number-content">
                                <h6 className="count-number2">700+</h6>
                              </div>
                            </div>
                            <div className="box-couter">
                              <p>Market cap</p>
                              <div className="number-content">
                                <h6 className="count-number2">$570.24 M</h6>
                              </div>
                            </div>
                            <div className="box-couter">
                              <p>Investors</p>
                              <div className="number-content">
                                <h6 className="count-number2">6.297</h6>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="image">
                          <img
                            className="img_main"
                            src={require('../../../assets/images/array-vc/banner-man.png')}
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Banner3;
