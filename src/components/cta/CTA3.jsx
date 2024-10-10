import React from 'react';
import { Link } from 'react-router-dom';


function CTA3(props) {
    return (
        <section className="tf-section tf_CTA_2">
            <div className="overlay">
            </div>
            <div className="container relative">
            
                <div className="row">
                    <div className="col-md-9">
                        <div className="tf-title left mb0" data-aos="fade-up" data-aos-duration="800">
                            <h2 className="title">
                            Shruti Gandhi
                            </h2>

                            <p className="sub">Email</p>
                            <h5 className="" >
                            shruti@arrayvc.com
                            </h5>
                            <p className="sub">Location</p>
                            <h5 className="">
                            Victoria Street SF,
                            CA 94789
                            </h5>
                            
                            <div className="wrap-btn">
                                <Link to="/project_submit" className="tf-button style3">
                                    Apply Project
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                    <div className="image_cta" data-aos="fade-left" data-aos-duration="1200">
                        <img className="" src={require ("../../assets/images/array-vc/ShrutiXbanner.png")} alt="" />
                        <img className="icon icon_1" src={require ("../../assets/images/common/coin3.png")} alt="" />
                        <img className="icon icon_2" src={require ("../../assets/images/common/coin4.png")} alt="" />
                    </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CTA3;