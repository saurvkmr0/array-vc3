import React  from 'react';
import '../styles.scss'
import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import { Link } from 'react-router-dom';

Banner.propTypes = {
    data : PropTypes.array,
};

function Banner (props) {
    const {data} = props;
    return (

        <div className="page-title">
            <div className="icon_bg">
                <img src={require ('../../../assets/images/backgroup/bg_inner_slider.png')} alt="Risebot" />
            </div>
            <div className="slider-main">
            <Swiper
                modules={[Navigation]}
                    spaceBetween={0}
                    slidesPerView={1}
                    navigation 
                >
                {
                    data.slice(0,2).map(item => (
                        <SwiperSlide key={item.id}>
                            <div className="slider-st2">
                                <img className="icon icon_1" src={require ("../../../assets/images/common/icon1_slider_2.png")} alt="" />
                                <img className="icon icon_2" src={require ("../../../assets/images/common/icon2_slider_2.png")} alt="" />
                                <img className="icon icon_3" src={require ("../../../assets/images/common/icon3_slider_2.png")} alt="" />
                                <div className="overlay">
                                    <img src={require ("../../../assets/images//backgroup/bg-slider2.png")} alt="" />
                                </div>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="box-slider">
                                                <div className="content-box">
                                                    <h1 className="title" >We bring the 2nd wave of customers</h1>
                                                    <p className="sub-title">Array Ventures is focused on solving impactful problems using revolutionary technology. Often that means category-leading startups that take advantage of data, analytics, workflows, and new platforms to change the way an industry works. We invest in smart people with a bold mission who take big risks in large or new markets. We want entrepreneurs to tell us what the world is going to look like in 2, 5, 10 years, and why they are going to be to be a winner in that world.
                                                    {/* <br className="show-destop" /> highest average ROI in the industry */}
                                                    </p>
                                                    <div className="wrap-btn">
                                                        <Link to="/faqs" className="tf-button style2">
                                                            Every Vision
                                                            
                                                            needs Liquidity
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
            </div>
        </div>
    );
}

export default Banner;