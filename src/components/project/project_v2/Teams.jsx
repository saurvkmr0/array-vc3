import React, { useState } from 'react';
import PropTypes from 'prop-types';
import img_bg from '../../../assets/images/backgroup/bg_project.png';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import '../styles.scss';
import ProjectItem from '../project_item_v1';
import Button from '../../button';

Project.propTypes = {
    data: PropTypes.array,
};

function Project(props) {
    const { data } = props;

    const [selectedCategory, setSelectedCategory] = useState('All'); // State to keep track of the selected category
    const [dataTitle] = useState({
        title: 'Our Advisors',
    });

    // Function to handle category selection
    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };

    // Slice the data from index 5 to 10 and then filter it based on the selected category
    const filteredData = data
        .slice(5, 10)
        .filter(item => selectedCategory === 'All' || item.category === selectedCategory);

    return (
        <section className="tf-section project_2">
            <div className="overlay">
                <img src={img_bg} alt="Risebot" />
            </div>
            <div className="container w_1690">
                <div className="row">
                    <div className="col-md-12">
                        <div className="tf-title" data-aos="fade-up" data-aos-duration="800">
                            <h2 className="title">
                                {dataTitle.title} <br className="show-destop" />
                                {dataTitle.title_2}
                            </h2>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="container_inner">
                            <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', marginBottom: '40px', flexWrap:'wrap' }}>
                                <Button title="All" onClick={() => handleCategoryClick('All')} addclass="style2" />
                                <Button title="Tech" onClick={() => handleCategoryClick('Tech')} addclass="style2" />
                                <Button title="Health" onClick={() => handleCategoryClick('Health')} addclass="style2" />
                                <Button title="Finance" onClick={() => handleCategoryClick('Finance')} addclass="style2" />
                            </div>

                            <div className="slider-2 navigation_project" style={{display:'flex', flexWrap:'wrap', gap:'40px', justifyContent:'center' }}>
                                {/* <Swiper
                                    modules={[Navigation]}
                                    spaceBetween={30}
                                    slidesPerView={1}
                                    navigation
                                    breakpoints={{
                                        0: {
                                            slidesPerView: 1,
                                        },
                                        750: {
                                            slidesPerView: 2,
                                        },
                                        991: {
                                            slidesPerView: 3,
                                        },
                                        1280: {
                                            slidesPerView: 4,
                                        },
                                    }}
                                > */}
                                    {filteredData.map((item) => (
                                        <SwiperSlide key={item.id} style={{width:'320px'}}>
                                            <ProjectItem item={item} />
                                        </SwiperSlide>
                                    ))}
                                {/* </Swiper> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Project;
