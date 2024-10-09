import React , { useState  } from 'react';
import PropTypes from 'prop-types';

import { Pagination , A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import '../styles.scss'; 
import Countdown from '../../countdown';
import infoThumb from '../../../assets/images/array-vc/personal-infothumb.png'

Project.propTypes = {
    data: PropTypes.array,
};
 
function Project(props) {
        const {data} = props;

    

    const [dataTitle] = useState(
        {
            title: 'Array Ventures invests in early-stage enterprise companies building transformative technologies.',
            title_2: ''
        }
    )

    return (
        <section className="tf-section project">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="tf-title" data-aos="fade-up" data-aos-duration="800">
                        <h2 className="title">
                        {dataTitle.title}<br className="show-destop"/> {dataTitle.title_2}
                        </h2>
                    </div>
                </div>
                <div className="col-md-12">
                    <div className="project-wrapper">
                        <div className="image-wrapper" data-aos="fade-in" data-aos-duration="1000">
                            <div className="slider-1">
                            <Swiper 
                                    modules={[Pagination, A11y]}
                                        spaceBetween={0}
                                        slidesPerView={1}
                                        pagination={{ clickable: true }}
                                    >
                                { 
                                    data.slice(0,1).map(item => (
                                        <SwiperSlide key={item.id} item={item}>
                                            <img src={infoThumb} alt="Risebot" />
                                        </SwiperSlide>
                                    ))
                                }
                            </Swiper>
                            </div>
                        </div>
                        <div className="content-wrapper">
                            <div className="content_inner" data-aos="fade-left" data-aos-duration="1200">
                                <div className="wrapper">
                                    <h4>We bring the 2nd wave of customers</h4>
                                <p className="desc">
                                Array Ventures is focused on solving impactful problems using revolutionary technology. Often that means category-leading startups that take advantage of data, analytics, workflows, and new platforms to change the way an industry works. We invest in smart people with a bold mission who take big risks in large or new markets. We want entrepreneurs to tell us what the world is going to look like in 2, 5, 10 years, and why they are going to be to be a winner in that world.
                                </p>
                                {/* <ul className="price"> 
                                    <li>
                                        <span>Price: $0.4</span>
                                    </li>
                                    <li>
                                       <span>Total sales: $4720</span>
                                    </li>
                                </ul> 
                                <h6 className="featured_title">Sale end in</h6> 
                                <div className="featured-countdown">
                                <div className="js-countdown">
                                    {<Countdown />}
                                </div>
                                    <ul className="desc">
                                        <li>day</li>
                                        <li>hou</li>
                                        <li>min</li>
                                        <li>sec</li>
                                    </ul>
                                </div>*/}
                                
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
}

export default Project;