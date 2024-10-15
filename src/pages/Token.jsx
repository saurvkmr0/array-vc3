import React from 'react';

import PageTitle from '../components/pagetitle';
import CTA from '../components/cta';
import { ImLinkedin } from "react-icons/im";
import { FaSquareXTwitter } from "react-icons/fa6";

import dataProject from '../assets/fake-data/data-project';
import Teams from '../components/project/project_v2/Teams';

const DevOps = [
    {
        id:1,
        img:'',
        name: 'Alex',
        designation:'Cloud DevOps Engineer',
        descp:' I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system.',
    },
    {
        id:1,
        img:'',
        name: 'Marry',
        designation:'Platform Engineer',
        descp:' I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system.',
    },
    {
        id:1,
        img:'',
        name: 'Ranu',
        designation:'DevOps',
        descp:' I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system.',
    },
    
]


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


            {/* DevOPS section */}
            {/* <h2 className="title" style={{textAlign:'center', marginBottom:'40px'}}>Dev Ops</h2> */}
                <div className="tf-title" data-aos="fade-up" data-aos-duration="800">
                            <h2 className="title">
                                Dev Ops 
                            </h2>
                        </div>
            
                <div className="" style={{display:'flex', flexWrap:'wrap', gap:'40px', justifyContent:'center', margin:'0px 60px'}}>
                {
                    DevOps.map((item)=>{
                        return(
                        <div className="" style={{backgroundColor:'#1e2835',width:'320px', padding:'40px', borderRadius:'20px'}} key={item.id}>
                            <div className="content">
                                <div className="content-inner" style={{textAlign:'left'}}>
                                    <h5 className="heading">{item.name}</h5>
                                    <p style={{ backgroundColor: "var(--highlight-color)", color: '#000', padding: '2px 10px', borderRadius: '5px', width: 'auto', display: 'inline-block' }}>
                                        {item.designation}
                                    </p>
                                    <p>{item.descp}</p>
                                </div>
                            </div> 
                        </div>
                        )
                    })
                }
                
            </div>



            {/* {<CTA />} */}
            
        </div>
    );
}

export default Token;