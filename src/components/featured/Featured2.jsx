import React from 'react';
import PropTypes from 'prop-types';

Featured2.propTypes = {
    data: PropTypes.array
};

function Featured2(props) {
    const {data} = props;
    return (
        <section className="tf-section features">
        <div className="overlay">
        </div>
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="tf-title" data-aos="fade-up" data-aos-duration="800">
                        <h2 className="title">
                            Our Advisors
                            {/* <br className="show-destop" />  */}
                        </h2>
                    </div>
                </div>
                <div className="col-md-12">
                    <div className="wrapper-box">
                        {
                            data.slice(0,5).map(item => (
                                <div key={item.id} className="icon-box-style2" style={{padding:'16px 16px', textAlign:'center'}}>
                                    <div className="" style={{textAlign:'center', width:'100%'}} >
                                        <img src={item.img} alt="" style={{ height: '150px', width: '150px' }}/>
                                    </div>
                                    <div className="content">
                                        <h5 className="title">{item.title}</h5>
                                        <p style={{background:'gray', color:'white', width:'fit-content', padding: '5px', borderRadius:'5px', margin:'0 auto 5px auto'}}>{item.position}</p>
                                        <p>{item.text}</p>
                                    </div>
                                </div>
                            ))
                        }

                    </div>
                </div>
            </div>
        </div>
    </section>
    );
}

export default Featured2;