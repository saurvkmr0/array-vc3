import React from 'react';

import PageTitle from '../components/pagetitle';
import CTA from '../components/cta/cta_v2';
import { Link } from 'react-router-dom';

import data from '../assets/fake-data/data-blog'
import  Button  from '../components/button/index';

function BlogGrid(props) {
    return (
        <div className='inner-page'>
            {<PageTitle title='10x Growth' />}

            <section className="tf-section tf-blog pt60">
            <div className="container">
            <div className="row"> 

                {
                    data.slice(0,10).map(item => (
                        <div key={item.id} className="col-lg-4 col-md-12">
                            <div className="grid-box">
                            
                                <div className="image" style={{backgroundColor:'#1e2835'}}>
                                    {/* <img src={item.img} alt="" /> */}
                                    <div style={{ width: '100%', aspectRatio: '16/9', position: 'relative' }}>
                                    <iframe
                                        title="vimeo-player"
                                        src={item.vidSrc}
                                        style={{
                                        width: '100%',
                                        height: '100%',
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        }}
                                        frameBorder="0"
                                        allowFullScreen
                                    >
                                    </iframe>
                                </div>


                                </div>
                                <div className="content">
                                    {/* <Link to="/blog_details" className="tag">{item.cate}</Link> */}
                                    <h5 className="title"><Link to="/blog_details">{item.heading}</Link></h5>
                                    {/* <p>{item.text}</p> */}
                                </div>
                                {/* <Link to="/blog_details" className="tf-button style1">
                                Read more
                                </Link> */}
                            </div>
                        </div>
                    ))
                }

                {/* <div className="col-md-12">
                    <ul className="panigation"  data-aos="fade-up" data-aos-duration="800">
                        <li>
                            <Link to="#">
                                <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.5 1L1.5 6L6.5 11" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </Link>
                        </li>
                        <li>
                            <Link to="#" className="active">
                                1
                            </Link>
                        </li>
                        <li>
                            <Link to="#">
                                2
                            </Link>
                        </li>
                        <li>
                            <Link to="#">
                                3
                            </Link>
                        </li>
                        <li>
                            <Link to="#">
                                <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.5 1L6.5 6L1.5 11" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </Link>
                        </li>
                    </ul>
                </div> */}
            </div>

            <div style={{display:'flex', flexDirection:'column', gap:'10px'}}>
                <div style={{textAlign:"center"}}>
                    <h3>Array Academy 10x Growth</h3>
                    <h6>Array runs an academy for founders to grow rapidly from 1-10m ARR. We know the journey to $1m ARR is hard and then to $10m ARR is even harder and murkier.
                    So we have gathered the best C-level execs from successful enterprise companies to help you create your best path forward. We have put together a curriculum that can help your company grow 10x.
                    </h6>
        
                </div>
                <div style={{width:'100%',display:'flex' ,justifyContent:'center'}}>
                    <Button title='Apply Here' path='/' addclass='style2'/>  
                </div>
            </div>

            <section className="tf-section tf-blog pt60">
                
                <h2 style={{textAlign:'center'}}>Recent Academies</h2>
                <div style={{margin:'40px 0'}}>
                    <img src='https://array.vc/static/img/Academy.21f7afb.jpg'/>
                    <p style={{margin:'40px 0'}}>
                        During this full-day event we will go deep into SaaS fundamentals – giving you a strong foundation in SaaS business models, go-to-market strategies, and how to scale your business. Each session will include detailed frameworks and examples you can leverage immediately.

                        Some of the topics that we will cover in this 10x Growth Array Academy are: SaaS Business Model(s) Fundamentals, Evolving CEO Priorities from $1M to $100M, Developing Your Go-to-Market Positioning, Product Strategy, Planning and Operations, Partnership Strategies

                        The sessions will be taught by:
                    </p>
                </div>
                <div className="container">
                <div className="row"> 

                    {
                        data.slice(10,14).map(item => (
                            <div key={item.id} className="col-lg-4 col-md-12">
                                <div className="grid-box">
                                
                                    <div className="image" style={{backgroundColor:'#1e2835'}}>
                                        <img src={item.img} alt="" />
                                        {console.log(item.img)}
                                        


                                    </div>
                                    <div className="content">
                                        {/* <Link to="/blog_details" className="tag">{item.cate}</Link> */}
                                        <h5 className="title"><Link to="/blog_details">{item.heading}</Link></h5>
                                        {/* <p>{item.text}</p> */}
                                    </div>
                                    {/* <Link to="/blog_details" className="tf-button style1">
                                    Read more
                                    </Link> */}
                                </div>
                            </div>
                        ))
                    }
                </div>
                </div>

                <div style={{margin:'40px 0', textAlign:'center'}}>
                    <img src='https://array.vc/static/img/Array%20Ventures%20&%20Atrium%20Workshop.63393a0.png'/>
                </div>
                <h6>
                Array Ventures and Atrium has invited successful B2B founders and investors to share with you best practices in the enterprise space. Our expert speakers will teach you how to navigate fundraising, recruiting, growth, positioning and pricing as an enterprise SaaS company in the Valley. Join us for our exclusive B2B SaaS conference.
                </h6>

            </section>   

        </div>

       
    </section>

        
            {/* {<CTA />} */}
            
        </div>
    );
}

export default BlogGrid;