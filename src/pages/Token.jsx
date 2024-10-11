import React from 'react';

import PageTitle from '../components/pagetitle';
import CTA from '../components/cta';
import { Chart } from '../components/token/Chart';
import { ImLinkedin } from "react-icons/im";
import { FaSquareXTwitter } from "react-icons/fa6";


function Token(props) {
    return (
        <div className='inner-page'>
            {<PageTitle title='Token' />}

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
                                {/* <ul className="describe_chart">
                                    <li>
                                        <img src={require ("../assets/images/chart/color_1.png")} alt="" />
                                        <div className="desc">
                                            <p className="name">Farming Pool</p>
                                            <p className="number">27.3%</p>
                                        </div>
                                    </li>
                                    <li>
                                        <img src={require ("../assets/images/chart/color_2.png")} alt="" />
                                        <div className="desc">
                                            <p className="name">Staking</p>
                                            <p className="number">15.3%</p>
                                        </div>
                                    </li>
                                    <li>
                                        <img src={require ("../assets/images/chart/color_3.png")} alt="" />
                                        <div className="desc">
                                            <p className="name">Ecosystem</p>
                                            <p className="number">7.5%</p>
                                        </div>
                                    </li>
                                    <li>
                                        <img src={require ("../assets/images/chart/color_4.png")} alt="" />
                                        <div className="desc">
                                            <p className="name">Advisor</p>
                                            <p className="number">7.03%</p>
                                        </div>
                                    </li>
                                    <li>
                                        <img src={require ("../assets/images/chart/color_5.png")} alt="" />
                                        <div className="desc">
                                            <p className="name">Private Sale</p>
                                            <p className="number">23.45%</p>
                                        </div>
                                    </li>
                                    <li>
                                        <img src={require ("../assets/images/chart/color_6.png")} alt="" />
                                        <div className="desc">
                                            <p className="name">Liquidity</p>
                                            <p className="number">13.3%</p>
                                        </div>
                                    </li>
                                    <li>
                                        <img src={require ("../assets/images/chart/color_7.png")} alt="" />
                                        <div className="desc">
                                            <p className="name">Marketing</p>
                                            <p className="number">7.3%</p>
                                        </div>
                                    </li>
                                    <li>
                                        <img src={require ("../assets/images/chart/color_8.png")} alt="" />
                                        <div className="desc">
                                            <p className="name">Team</p>
                                            <p className="number">5.3%</p>
                                        </div>
                                    </li>
                                </ul> */}
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
                        
                        <div className="col-md-12">
                            <div className="tf-title left mt17 mb40" data-aos="fade-up" data-aos-duration="800">
                                <h2 className="title" style={{textAlign:'center', marginTop:'40px'}}>
                                    Our Advisor Team
                                </h2> 
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="tokenomics-wrapper" data-aos="fade-up" data-aos-duration="800">
                                <div className="box">
                                    <div className="td td1">
                                        <p>Category</p>
                                        <p>Marketing</p>
                                    </div>
                                    <div className="td td2">
                                        <p>Allocation</p>
                                        <p>14%</p>
                                    </div>
                                    <div className="td td3">
                                        <p>Raise</p>
                                        <p>24,000,000</p>
                                    </div>
                                    <div className="td td4">
                                        <p>Locked</p>
                                        <p>12 Month</p>
                                    </div>
                                    <div className="td td5">
                                        <p>Vesting (Month)</p>
                                        <p>24</p>
                                    </div>
                                </div>

                                <div className="box">
                                    <div className="td td1">
                                        <p>Category</p>
                                        <p>Ecosystem</p>
                                    </div>
                                    <div className="td td2">
                                        <p>Allocation</p>
                                        <p>	12%</p>
                                    </div>
                                    <div className="td td3">
                                        <p>Raise</p>
                                        <p>	65,000,00</p>
                                    </div>
                                    <div className="td td4">
                                        <p>Locked</p>
                                        <p>3 Month</p>
                                    </div>
                                    <div className="td td5">
                                        <p>Vesting (Month)</p>
                                        <p>9</p>
                                    </div>
                                </div>

                                <div className="box">
                                    <div className="td td1">
                                        <p>Category</p>
                                        <p>Team</p>
                                    </div>
                                    <div className="td td2">
                                        <p>Allocation</p>
                                        <p>8%</p>
                                    </div>
                                    <div className="td td3">
                                        <p>Raise</p>
                                        <p>70,000,00</p>
                                    </div>
                                    <div className="td td4">
                                        <p>Locked</p>
                                        <p>2 Month</p>
                                    </div>
                                    <div className="td td5">
                                        <p>Vesting (Month)</p>
                                        <p>16</p>
                                    </div>
                                </div>

                                <div className="box">
                                    <div className="td td1">
                                        <p>Category</p>
                                        <p>Advisors</p>
                                    </div>
                                    <div className="td td2">
                                        <p>Allocation</p>
                                        <p>5%</p>
                                    </div>
                                    <div className="td td3">
                                        <p>Raise</p>
                                        <p>	11,000,00</p>
                                    </div>
                                    <div className="td td4">
                                        <p>Locked</p>
                                        <p>6 Month</p>
                                    </div>
                                    <div className="td td5">
                                        <p>Vesting (Month)</p>
                                        <p>12</p>
                                    </div>
                                </div>

                                <div className="box">
                                    <div className="td td1">
                                        <p>Category</p>
                                        <p>Staking</p>
                                    </div>
                                    <div className="td td2">
                                        <p>Allocation</p>
                                        <p>22%</p>
                                    </div>
                                    <div className="td td3">
                                        <p>Raise</p>
                                        <p>9,000,000</p>
                                    </div>
                                    <div className="td td4">
                                        <p>Locked</p>
                                        <p>3 Month</p>
                                    </div>
                                    <div className="td td5">
                                        <p>Vesting (Month)</p>
                                        <p>4</p>
                                    </div>
                                </div>

                                <div className="box">
                                    <div className="td td1">
                                        <p>Category</p>
                                        <p>Private Round</p>
                                    </div>
                                    <div className="td td2">
                                        <p>Allocation</p>
                                        <p>45%</p>
                                    </div>
                                    <div className="td td3">
                                        <p>Raise</p>
                                        <p>88,000,000</p>
                                    </div>
                                    <div className="td td4">
                                        <p>Locked</p>
                                        <p>7 Month</p>
                                    </div>
                                    <div className="td td5">
                                        <p>Vesting (Month)</p>
                                        <p>4</p>
                                    </div>
                                </div>

                                <div className="box">
                                    <div className="td td1">
                                        <p>Category</p>
                                        <p>Exchange <br /> Liquidity</p>
                                    </div>
                                    <div className="td td2">
                                        <p>Allocation</p>
                                        <p>5.8%</p>
                                    </div>
                                    <div className="td td3">
                                        <p>Raise</p>
                                        <p>5,000,000</p>
                                    </div>
                                    <div className="td td4">
                                        <p>Locked</p>
                                        <p>1 Month</p>
                                    </div>
                                    <div className="td td5">
                                        <p>Vesting (Month)</p>
                                        <p>2</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {<CTA />}
            
        </div>
    );
}

export default Token;