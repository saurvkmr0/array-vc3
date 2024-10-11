import React from 'react';

import PageTitle from '../components/pagetitle';
import CTA from '../components/cta';
import { ImLinkedin } from "react-icons/im";
import { FaSquareXTwitter } from "react-icons/fa6";

import dataProject from '../assets/fake-data/data-project';
import Teams from '../components/project/project_v2/Teams';


function Token(props) {
    return (
        <div className='inner-page'>
            {<PageTitle title='Our Team' />}

            <section className="tf-section tf-token pt60">
                <div className="container">
                    <div className="row">  
                        <div className="col-lg-6 col-md-6" >
                            <div className="tf-title left mb40" data-aos-delay="500" data-aos="fade-up" data-aos-duration="800">
                                <h2 className="title">
                                    Shruti Gandhi
                                </h2>
                            </div>
                            <div className="desc-token" data-aos-delay="500" data-aos="fade-up" data-aos-duration="800">
                                <div className="total-token">
                                    <p><span>Founder & Managing Partner</span></p>
                                    <h3><span> <ImLinkedin /></span><span> <FaSquareXTwitter /></span></h3>
                                </div>
                                    <h6>
                                    Shruti brings a strong mix of operating and investing experience. Previously, Shruti was an early stage venture capital investor at True Ventures, Samsung Electronics, Lightbank, HighBAR Partners, and the i2A Fund.
                                    Shruti started working with Machine Learning algorithms while working on her master's thesis in computer science from Columbia University on understanding user behavior on instant messaging platforms. While at IBM she worked on self learning algorithms that detected user location based on IP addresses, which she later incorporated into the Lotus Sametime product. Later, her company Penseev helped users make better connections with their friends based on social data.
                                    {/* When not investing, she is hacking on some app or thinking about ways she can be in many places at one time. Shruti also has an MBA from the University of Chicago, where she polished her finance skills before making the switch from engineer/founder to investor. */}
                                    </h6>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6" style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                            {/* <div data-aos="fade-left" data-aos-delay="500" data-aos-duration="800"> */}
                                {/* <div id="chart"> */}
                                <img src={require ("../assets/images/array-vc/ShrutiXbanner.png")} style={{width:'80%', height:'auto'}} alt="" />
                                {/* <Chart /> */}
                                {/* </div> */}
                            {/* </div> */}
                        </div>
                        
                    </div>
                </div>
            </section>

            
            {<Teams data={dataProject}/>}
            {/* {<Project2 data={dataProject}/>} */}


            {<CTA />}
            
        </div>
    );
}

export default Token;