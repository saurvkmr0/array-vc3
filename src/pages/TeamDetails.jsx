import React,{useState} from 'react';

import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import CTA from '../components/cta';
import PageTitle from '../components/pagetitle';
import { Link } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const blogs = [
    {
        id: 1,
        name: 'Darrell Steward',
        designation: 'Developer',
        img: '',
        descp1:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus fringilla rutrum eros, vitae fringilla metus sodales vel. Praesent vehicula ac nunc sit amet rhoncus. In vel ligula et nulla scelerisque suscipit. Quisque in nisi viverra, mattis felis id, porttitor dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
        descp2:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus fringilla rutrum eros, vitae fringilla metus sodales vel. Praesent vehicula ac nunc sit amet rhoncus. In vel ligula et nulla scelerisque suscipit. Quisque in nisi viverra, mattis felis id, porttitor dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
        postDate: '26th Feb, 2023',
    },
    {
        id: 2,
        name: 'Jonson Kate',
        designation: 'Junior Developer',
        img: '',
        postDate: '12th Sept, 2024',
    },
    {
        id: 3,
        name: 'Linda Will',
        designation: 'Designer',
        img: '',
        postDate: '3th Nov, 2024',
    },
    {
        id:4,
        name: 'Chris K.',
        designation: 'Business Anylist',
        img: '',
        postDate: '9th Nov, 2024',
    },
];

function TeamDetails(props) {

    const [isGridView, setIsGridView] = useState(false);

    return (
        <div className='inner-page'>
            <PageTitle title='Blogs' />

            <section className="tf-section tf-team-details pt60">
                <div className="container">
                    <div className="flat-tabs" data-aos="fade-up" data-aos-duration="1000">                       
                        <Tabs>
                            <div className="wrapper_menutab">
                                <TabList className='menu-tab'>    
                                    <Tab className='fs-14 h6' onClick={() => setIsGridView(false)}>List View</Tab>
                                    <Tab className='fs-14 h6' onClick={() => setIsGridView(true)}>Grid View</Tab>                                              
                                </TabList>
                            </div>
                        </Tabs>
                    </div>

                    <div className="row" style={{ marginTop: '20px'}}> 
                        { 
                            isGridView
                            ?
                            <div style={{width:'100%', display:'flex', flexDirection:'row', flexWrap:'wrap', justifyContent:'space-around'}}>
                            {blogs.map((item)=>(
                                <div className="project-box" style={{width:'340px'}}>
                                <div className="image">
                                    <img src={require("../assets/images/common/team_5.png")} alt="" />
                                    </div>
                                        <div className="content">
                                            <span className="boder"></span>
                                            <div className="content-inner">
                                                <h5 className="name">{item.name}</h5>
                                                <p className="position">{item.designation}</p>
                                                <p>{blogs[0].descp1}</p>
                                                {/* <p>{blogs[0].descp2}</p> */}
                                                <div className="spacing"></div>
                                                <div className="box">
                                                    <span>Posted on: <span className="color-hover">{item.postDate}</span></span>
                                                </div>
                                                
                                        </div>
                
                                    </div> 
                                {/* <Button title='EXPLORE' path='/' addclass='style1'/>   */}
                                </div>
                            ))}
                            </div>
                            :
                            blogs.map((item) => (
                                <div className="col-md-12" key={item.id} style={{marginBottom:'20px'}}>
                                    <div className="team-details">
                                        <div className="image_wrapper">
                                            <div className="image">
                                                <img src={require("../assets/images/common/team_5.png")} alt="" />
                                            </div>
                                        </div> 
                                        <div className="content">
                                            <h5 className="name">{item.name}</h5>
                                            <p className="position">{item.designation}</p>
                                            <p>{blogs[0].descp1}</p>
                                            <p>{blogs[0].descp2}</p>
                                            
                                            
                                            <div className="spacing"></div>
                                            <div className="box">
                                                <span>Posted on: <span className="color-hover">{item.postDate}</span></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>

            {/* <CTA /> */}
        </div>
    );
}

export default TeamDetails;
