import React, { useEffect, useState } from 'react';
import '../styles.scss';
import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import Button from '../../button';
import './styles.scss';
import heroImage from '../../../assets/images/common/img_technology1.png';

Banner.propTypes = {
  data: PropTypes.array,
};

function Banner(props) {
  // hero text
  const changingText = ['Cybersecurity', 'Future', 'B2B SaaS', 'Ed Tech', 'AI'];
  const [currentText, setCurrentText] = useState(changingText[0]);
  const [fadeOut, setFadeOut] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const cycleText = () => {
      setFadeOut(true); // Start fade-out

      setTimeout(() => {
        // Change text after fading out
        setIndex((prevIndex) => (prevIndex + 1) % changingText.length);
        setCurrentText(changingText[(index + 1) % changingText.length]);
        setFadeOut(false); // Start fade-in
      }, 500); // Match this time with the CSS transition duration
    };

    const interval = setInterval(cycleText, 2000); // Change text every 2 seconds
    return () => clearInterval(interval);
  }, [index]);

  const { data } = props;

  return (
    <div className="page-title">
      <div className="icon_bg">
        {/* <img src={require ('../../../assets/images/backgroup/bg_inner_slider.png')} alt="Risebot" /> */}
      </div>
      <div className="slider-main">
        <Swiper modules={[Navigation]} spaceBetween={0} slidesPerView={1} navigation>
          {data.slice(0, 1).map((item) => (
            <SwiperSlide key={item.id}>
              <div className="slider-st1">
                <div className="overlay">
                  <img src={require('../../../assets/images//backgroup/bg-slider.png')} alt="Risebot" />
                </div>
                <div className="container">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="box-slider">
                        <div className="content-box">
                          <h1 className="title">Empowering</h1>
                          <h1
                            className="title"
                            style={{
                              opacity: fadeOut ? 0 : 1,
                              transition: 'opacity 0.5s ease-in-out',
                            }}
                          >
                            {currentText}
                          </h1>
                          <h1 className="title">Founders</h1>
                          <p className="sub-title secondary-text">
                            {item.sub_heading} <hr className="hrz-line" />
                          </p>
                          <div className="wrap-btn">
                            <Button title="EXPLOR ARRAY VC" path="/" addclass="style2" />
                          </div>
                        </div>
                        <div className="image">
                          <img className="img_main" src={heroImage} alt="Risebot" />
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

export default Banner;
