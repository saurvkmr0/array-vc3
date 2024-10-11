import React from 'react';

import PageTitle from '../components/pagetitle';
import CTA from '../components/cta/cta_v2';

import icon from '../assets/images/common/down.svg'

import people1 from '../assets/images/common/team_1.png'
import people2 from '../assets/images/common/team_2.png'
import people3 from '../assets/images/common/team_3.png'
import people4 from '../assets/images/common/team_4.png'
import people5 from '../assets/images/common/team_5.png'
import people6 from '../assets/images/common/team_6.png'
import people7 from '../assets/images/common/team_7.png'
import people9 from '../assets/images/common/team_8.png'




function Roadmap(props) {
    return (
        <div className='inner-page'>
            {<PageTitle title='Testimonial' />}

            <section className="tf-section roadmap">
        <div className="container">
            <div className="row"> 
                <div className="col-md-12"> 
                    <div className="roadmap-wrapper-style2" data-aos="fade-up" data-aos-duration="1200">
                        <div className="left">

                            <div className="roadmap-box-style active">
                                <div className="icon">
                                    <img src={icon} alt="" />
                                </div>
                                <div className="content">
                                    <div style={{display:'flex', alignItems:'center', marginBottom:'20px'}}>
                                        <img src={people1} style={{borderRadius:"50%"}} />
                                        <div>
                                            <h3>Max</h3>
                                            <h6>⭐⭐⭐⭐⭐</h6>
                                        </div>
                                    </div>
                                    <ul>
                                        <li>Cras molestie ullamcorper augue nec pulvinar</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="roadmap-box-style active">
                                <div className="icon">
                                    <img src={icon} alt="" />
                                </div>
                                <div className="content">
                                    <div style={{display:'flex', alignItems:'center', marginBottom:'20px'}}>
                                        <img src={people2} style={{borderRadius:"50%"}} />
                                        <div>
                                            <h3>Andy</h3>
                                            <h6>⭐⭐⭐⭐</h6>
                                        </div>
                                    </div>
                                    <ul>
                                        <li>Cras molestie ullamcorper augue nec pulvinar</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="roadmap-box-style active">
                                <div className="icon">
                                    <img src={icon} alt="" />
                                </div>
                                <div className="content">
                                    <div style={{display:'flex', alignItems:'center', marginBottom:'20px'}}>
                                        <img src={people3} style={{borderRadius:"50%"}} />
                                        <div>
                                            <h3>Rita</h3>
                                            <h6>⭐⭐⭐⭐⭐</h6>
                                        </div>
                                    </div>
                                    <ul>
                                        <li>Cras molestie ullamcorper augue nec pulvinar</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="roadmap-box-style active">
                                <div className="icon">
                                    <img src={icon} alt="" />
                                </div>
                                <div className="content">
                                    <div style={{display:'flex', alignItems:'center', marginBottom:'20px'}}>
                                        <img src={people4} style={{borderRadius:"50%"}} />
                                        <div>
                                            <h3>Robbin</h3>
                                            <h6>⭐⭐⭐⭐</h6>
                                        </div>
                                    </div>
                                    <ul>
                                        <li>Cras molestie ullamcorper augue nec pulvinar</li>
                                    </ul>
                                </div>
                            </div>

                        </div>


                        <div className="right">

                        <div className="roadmap-box-style active">
                                <div className="icon">
                                    <img src={icon} alt="" />
                                </div>
                                <div className="content">
                                    <div style={{display:'flex', alignItems:'center', marginBottom:'20px'}}>
                                        <img src={people5} style={{borderRadius:"50%"}} />
                                        <div>
                                            <h3>Ron</h3>
                                            <h6>⭐⭐⭐⭐</h6>
                                        </div>
                                    </div>
                                    <ul>
                                        <li>Cras molestie ullamcorper augue nec pulvinar</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="roadmap-box-style active">
                                <div className="icon">
                                    <img src={icon} alt="" />
                                </div>
                                <div className="content">
                                    <div style={{display:'flex', alignItems:'center', marginBottom:'20px'}}>
                                        <img src={people6} style={{borderRadius:"50%"}} />
                                        <div>
                                            <h3>Jeen</h3>
                                            <h6>⭐⭐⭐⭐</h6>
                                        </div>
                                    </div>
                                    <ul>
                                        <li>Cras molestie ullamcorper augue nec pulvinar</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="roadmap-box-style active">
                                <div className="icon">
                                    <img src={icon} alt="" />
                                </div>
                                <div className="content">
                                    <div style={{display:'flex', alignItems:'center', marginBottom:'20px'}}>
                                        <img src={people7} style={{borderRadius:"50%"}} />
                                        <div>
                                            <h3>Abduul</h3>
                                            <h6>⭐⭐⭐⭐⭐</h6>
                                        </div>
                                    </div>
                                    <ul>
                                        <li>Cras molestie ullamcorper augue nec pulvinar</li>
                                    </ul>
                                </div>
                            </div>

                        </div>


                    </div>
                </div> 
            </div>
        </div>
    </section>
            {/* {<CTA />} */}
            
        </div>
    );
}

export default Roadmap;